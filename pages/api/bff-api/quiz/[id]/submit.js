import { mapRJSFResponseToFHIR } from "../../../../../util/schema";
import {
  getResourceById,
  createResource,
  searchForResource,
} from "../../../../../lib/hapi";

async function tryGetPatient(msdPatient) {
  const query = `identifier=MSD|${msdPatient.id}`;
  const response = await searchForResource("Patient", query);

  let patient = undefined;

  if (response.total > 0) {
    patient = response.entry[0];
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

    patient = await createResource("Patient", newPatient);
  }

  return patient;
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
  const fhirPatient = await tryGetPatient(patient);
  const fhirQuestionnaireResponse = mapRJSFResponseToFHIR(
    quizResponse,
    id,
    fhirQuestionnaire,
    fhirPatient.id
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
