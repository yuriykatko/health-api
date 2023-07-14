import { getDocuments } from "../../lib/mongodb";

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
  const data = await getDocuments("CareTeam", 10);

  res.status(200).json(data.slice(0, 10));
}
