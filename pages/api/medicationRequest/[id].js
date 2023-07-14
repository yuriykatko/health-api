import data from "../../../data/MedicationRequest";

/**
 * @swagger
 * /api/medicationRequest/{id}:
 *   get:
 *     description: Returns a single Medication Request entry
 *     tags:
 *       - Medication Request
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: ea43e2f3-93a3-69db-0f64-9e927583a731
 *         description: String ID (within resource.id) of the Medication Request to get
 *     responses:
 *       200:
 *         description: Returns a single Medication Request entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
