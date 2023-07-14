import data from "../../data/Immunization";

/**
 * @swagger
 * /api/immunization:
 *   get:
 *     description: Returns all Immunization entries
 *     tags:
 *       - Immunization
 *     responses:
 *       200:
 *         description: Returns all Immunization entries
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
