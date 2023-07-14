import data from "../../data/Patient";

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
  res.status(200).json(data);
}
