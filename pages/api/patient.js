import patients from "../../data/patients";

/**
 * @swagger
 * /api/patient:
 *   get:
 *     description: Returns a single Patient
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 577390
 *         description: String ID (within resource.identifier) of the Patient to get
 *     responses:
 *       200:
 *         description: Returns All Patients
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const patient = patients.find((pat) =>
    pat.resource.identifier.some((patId) => patId.value === id)
  );

  res.status(200).json(patient ?? "not found");
}
