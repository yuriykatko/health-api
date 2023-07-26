import { getDocumentById, } from "../../../../lib/mongodb";
import { prepareSchemaForJsonForm } from "../../../../util/schema";

/**
 * @swagger
 * /api/front-end-api/quiz/{id}:
 *   get:
 *     description: Returns a single quiz entry
 *     tags:
 *       - API Front-End
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 4
 *         description: String ID (within resource.id) of the questionnaire to get
 *     responses:
 *       200:
 *         description: Returns a single quiz entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Questionnaire", id);
  
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
