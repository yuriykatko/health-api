import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/procedure:
 *   get:
 *     description: Returns First 10 Procedure entries
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Returns First 10 Procedure entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Procedure", 10);

  res.status(200).json(data);
}
