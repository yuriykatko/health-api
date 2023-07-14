import data from "../../data/MedicationRequest";

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
  res.status(200).json(data.slice(0, 10));
}
