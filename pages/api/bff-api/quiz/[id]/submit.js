import { mapRJSFResponseToFHIR } from "../../../../../util/schema";
import {
  getResourceById,
  createResource,
  searchForResource,
} from "../../../../../lib/hapi";

async function tryGetPatientId(msdPatient) {
  const query = `identifier=MSD|${msdPatient.id}`;
  const response = await searchForResource("Patient", query);

  let id = undefined;

  if (response.total > 0) {
    id = response.entry[0].resource.id;
  } else {
    const newPatient = {
      resourceType: "Patient",
      identifier: [
        {
          use: "usual",
          system: "MSD",
          value: msdPatient.id,
        },
      ],
      active: true,
      name: [
        {
          use: "official",
          family: msdPatient.lastName,
          given: [msdPatient.firstName],
        },
      ],
      gender: msdPatient.gender,
    };

    const patient = await createResource("Patient", newPatient);

    id = patient.id;
  }

  return id;
}

/**
 * @swagger
 * /api/bff-api/quiz/{id}/submit:
 *   post:
 *     description: Submits Quiz response
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: Quiz Id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - Front End API - RJSF
 *     responses:
 *       200:
 *         description: Submits Quiz response
 */
async function handlePost(req, res) {
  const query = req.query;
  const { id } = query;
  const { quizResponse, patient } = req.body;

  const fhirQuestionnaire = await getResourceById("Questionnaire", id);
  const fhirPatientId = await tryGetPatientId(patient);

  const fhirQuestionnaireResponse = mapRJSFResponseToFHIR(
    quizResponse,
    id,
    fhirQuestionnaire,
    fhirPatientId
  );

  const fhirResponse = await createResource(
    "QuestionnaireResponse",
    fhirQuestionnaireResponse
  );

  res.status(200).json(fhirResponse);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    await handlePost(req, res);
  }

  if (req.method === "OPTIONS") {
    res.status(200).json("ok");
  }
}
