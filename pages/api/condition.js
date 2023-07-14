import data from "../../data/Condition";

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
  res.status(200).json(data.slice(0, 10));
}
