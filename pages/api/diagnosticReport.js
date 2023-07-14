import data from "../../data/DiagnosticReport";

/**
 * @swagger
 * /api/diagnosticReport:
 *   get:
 *     description: Returns all Diagnostic Report entries
 *     tags:
 *       - DiagnosticReport
 *     responses:
 *       200:
 *         description: Returns all Diagnostic Report entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
