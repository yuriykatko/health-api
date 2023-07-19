import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/questionnaire:
 *   get:
 *     description: Returns First 10 Questionnaire entries
 *     tags:
 *       - Questionnaire
 *     responses:
 *       200:
 *         description: Returns First 10 Questionnaire entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Questionnaire", 10);

  res.status(200).json(data);
}
