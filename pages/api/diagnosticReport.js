import data from "../../data/DiagnosticReport";

/**
 * @swagger
 * /api/diagnosticReport:
 *   get:
 *     description: Returns First 10 Diagnostic Report entries
 *     tags:
 *       - DiagnosticReport
 *     responses:
 *       200:
 *         description: Returns First 10 Diagnostic Report entries
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
