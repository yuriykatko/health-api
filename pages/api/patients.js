import patients from "../../data/Patient";

/**
 * @swagger
 * /api/patients:
 *   get:
 *     description: Returns Patients
 *     responses:
 *       200:
 *         description: Returns All Patients
 */
export default async function handler(req, res) {
  res.status(200).json(patients);
}
