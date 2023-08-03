import { createResource, getResourceById } from "../../../../../lib/hapi";
import { prepareSchemaForFHIR } from "../../../../../util/schema";

/**
 * @swagger
 * /api/front-end-api/quiz/{id}/submit:
 *   post:
 *     description: Submit answers for a quiz
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 10980429
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - Front End API - JsonForms
 *     responses:
 *       200:
 *         description: Submit answers for a quiz
 */
async function handlePost(req, res) {
  const query = req.query;
  const { id } = query;
  const questionnaire = await getResourceById("Questionnaire", id);
  const fhirRequest = prepareSchemaForFHIR(req.body, id, questionnaire);
  const result = await createResource("QuestionnaireResponse", fhirRequest);

  res.status(200).json(result);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    await handlePost(req, res);
  }

  if (req.method === "OPTIONS") {
    res.status(200).json("ok");
  }
}
