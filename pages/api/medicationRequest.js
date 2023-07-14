import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/medicationRequest:
 *   get:
 *     description: Returns First 10 Medication Request entries
 *     tags:
 *       - Medication Request
 *     responses:
 *       200:
 *         description: Returns First 10 Medication Request entries
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("MedicationRequest", 10);

  res.status(200).json(data);
}
