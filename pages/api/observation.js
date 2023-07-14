import data from "../../data/Observation";

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
  res.status(200).json(data.slice(0, 10));
}
