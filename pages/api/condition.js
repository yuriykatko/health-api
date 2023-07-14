import data from "../../data/Condition";

/**
 * @swagger
 * /api/condition:
 *   get:
 *     description: Returns all Condition entries
 *     tags:
 *       - Condition
 *     responses:
 *       200:
 *         description: Returns all Condition entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
