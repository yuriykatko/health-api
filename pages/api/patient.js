import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/patient:
 *   get:
 *     description: Returns Patients
 *     tags:
 *       - Patient
 *     responses:
 *       200:
 *         description: Returns All Patients
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("Patient", 10);

  res.status(200).json(data);
}
