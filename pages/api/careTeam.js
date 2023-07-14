import data from "../../data/CareTeam";

/**
 * @swagger
 * /api/careTeam:
 *   get:
 *     description: Returns First 10 Care Team entries
 *     tags:
 *       - Care Team
 *     responses:
 *       200:
 *         description: Returns First 10 Care Team entries
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
