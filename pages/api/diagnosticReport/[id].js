import data from "../../../data/DiagnosticReport";

/**
 * @swagger
 * /api/diagnosticReport/{id}:
 *   get:
 *     description: Returns a single DiagnosticReport entry
 *     tags:
 *       - DiagnosticReport
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 2407fdaa-49c2-1bcf-3cc4-d489b069f9cc
 *         description: String ID (within resource.id) of the DiagnosticReport to get
 *     responses:
 *       200:
 *         description: Returns a single DiagnosticReport entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
