import data from "../../data/CareTeam";

/**
 * @swagger
 * /api/careTeam:
 *   get:
 *     description: Returns All Care Team entries
 *     tags:
 *       - Care Team
 *     responses:
 *       200:
 *         description: Returns All Care Team entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
