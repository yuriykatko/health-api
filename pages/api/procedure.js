import data from "../../data/Procedure";

/**
 * @swagger
 * /api/procedure:
 *   get:
 *     description: Returns all Procedure entries
 *     tags:
 *       - Procedure
 *     responses:
 *       200:
 *         description: Returns all Procedure entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
