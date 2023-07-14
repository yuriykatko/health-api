import data from "../../data/Procedure";

/**
 * @swagger
 * /api/procedure:
 *   get:
 *     description: Returns First 10 Procedure entries
 *     tags:
 *       - Procedure
 *     responses:
 *       200:
 *         description: Returns First 10 Procedure entries
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
