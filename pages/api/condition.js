import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/condition:
 *   get:
 *     description: Returns First 10 Condition entries
 *     tags:
 *       - Condition
 *     responses:
 *       200:
 *         description: Returns First 10 Condition entries
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("Condition", 10);

  res.status(200).json(data);
}
