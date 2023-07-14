import data from "../../../../data/MedicationRequest";

/**
 * @swagger
 * /api/patient/{id}/medicationRequest:
 *   get:
 *     description: Returns First 10 Medication Request entries for given Patient
 *     tags:
 *       - Patient
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 479e6c57-e333-b5fb-4e42-c42ca864660d
 *         description: String ID (within resource.id) of the Patient to get Medication Request entries for
 *     responses:
 *       200:
 *         description: Returns First 10 Medication Request entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.filter((item) => item.resource.subject.reference.includes(id));

  res.status(200).json(result.slice(0, 10) ?? "not found");
}
