import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/immunization:
 *   get:
 *     description: Returns First 10 Immunization entries
 *     tags:
 *       - Immunization
 *     responses:
 *       200:
 *         description: Returns First 10 Immunization entries
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("Immunization", 10);

  res.status(200).json(data);
}
