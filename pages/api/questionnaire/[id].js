import { getDocumentById } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/questionnaire/{id}:
 *   get:
 *     description: Returns a single questionnaire entry
 *     tags:
 *       - Questionnaire
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
 *         description: Returns a single questionnaire entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Questionnaire", id);
  
  res.status(200).json(result ?? "not found");
}
