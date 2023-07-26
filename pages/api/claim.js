import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/claim:
 *   get:
 *     description: Returns First 10 Claim entries
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Returns First 10 Claim entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Claim", 10);

  res.status(200).json(data);
}
