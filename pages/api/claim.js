import data from "../../data/Claim";

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
  res.status(200).json(data.slice(0, 10));
}
