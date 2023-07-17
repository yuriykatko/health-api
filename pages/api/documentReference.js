import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/documentReference:
 *   get:
 *     description: Returns First 10 Document Reference entries
 *     tags:
 *       - Document Reference
 *     responses:
 *       200:
 *         description: Returns First 10 Document Reference entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("DocumentReference", 10);

  res.status(200).json(data);
}
