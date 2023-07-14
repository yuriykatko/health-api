import data from "../../data/Encounter";

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
  res.status(200).json(data.slice(0, 10));
}
