import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/observation:
 *   get:
 *     description: Returns First 10 Observation entries
 *     tags:
 *       - Observation
 *     responses:
 *       200:
 *         description: Returns First 10 Observation entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Observation", 10);

  res.status(200).json(data);
}
