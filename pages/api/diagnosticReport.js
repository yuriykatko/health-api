import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

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
  const data = await getFirstNDocumentsInCollection("DiagnosticReport", 10);

  res.status(200).json(data);
}
