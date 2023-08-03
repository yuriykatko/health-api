import { searchForResource } from "../../../../../../lib/hapi";

async function tryGetPatient(idInMSD) {
  const query = `identifier=MSD|${idInMSD}`;
  const response = await searchForResource("Patient", query);

  return response.total > 0 ? response.entry[0] : undefined;
}

async function tryGetAllQuizResponses(fhirQId, fhirPatientId) {
  const query = `questionnaire=${fhirQId}&subject=${fhirPatientId}`
  const response = await searchForResource("QuestionnaireResponse", query);

  return response.total > 0 ? response.entry : [];
}

/**
 * @swagger
 * /api/bff-api/quiz/{id}/results/{msdPatientId}:
 *   get:
 *     description: Get All Quiz Responses for given user
 *     tags:
 *       - BFF API
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: Quiz Id
 *       - in: path
 *         name: msdPatientId
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: Patient Id in MSD 
 *     
 *     responses:
 *       200:
 *         description: Submits Quiz response
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id, msdPatientId } = query;

  const patient = await tryGetPatient(msdPatientId);

  if (!patient) {
    res.status(200).json([]); 
  } else {
    const responses = await tryGetAllQuizResponses(id, patient.resource.id);

    res.status(200).json(responses);
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }
}
