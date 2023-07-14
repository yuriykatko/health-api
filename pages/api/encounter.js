import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/encounter:
 *   get:
 *     description: Returns First 10 Encounter entries
 *     tags:
 *       - Encounter
 *     responses:
 *       200:
 *         description: Returns First 10 Encounter entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Encounter", 10);

  res.status(200).json(data);
}
