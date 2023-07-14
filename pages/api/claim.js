import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/claim:
 *   get:
 *     description: Returns First 10 Claim entries
 *     tags:
 *       - Claim
 *     responses:
 *       200:
 *         description: Returns First 10 Claim entries
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("Claim", 10);

  res.status(200).json(data);
}
