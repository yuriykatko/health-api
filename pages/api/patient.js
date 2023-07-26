import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/patient:
 *   get:
 *     description: Returns Patients
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Returns All Patients
 */
export default async function handler(req, res) {
  const data = await getDocuments("Patient", 10);

  res.status(200).json(data);
}
