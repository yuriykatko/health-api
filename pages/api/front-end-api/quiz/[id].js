import { prepareSchemaForJsonForm } from "../../../../util/schema";
import { getResourceById } from "../../../../lib/hapi";

/**
 * @swagger
 * /api/front-end-api/quiz/{id}:
 *   get:
 *     description: Returns a single quiz entry
 *     tags:
 *       - Front End API - JsonForms
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 10980429
 *         description: String ID (within resource.id) of the questionnaire to get
 *     responses:
 *       200:
 *         description: Returns a single quiz entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getResourceById("Questionnaire", id);

  let quiz = undefined;

  if (result) {
    quiz = prepareSchemaForJsonForm(result);
  }
  
  res.status(200).json(quiz ?? "not found");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }
}
