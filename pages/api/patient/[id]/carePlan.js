import data from "../../../../data/CarePlan";

/**
 * @swagger
 * /api/patient/{id}/carePlan:
 *   get:
 *     description: Returns First 10 Care Plan entries for given Patient
 *     tags:
 *       - Patient
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 0a56854c-d96f-e6b8-40fb-d55b3e438d27
 *         description: String ID (within resource.id) of the Patient to get Care Plans for
 *     responses:
 *       200:
 *         description: Returns First 10 Care Plan entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.filter((item) => item.resource.subject.reference.includes(id));

  res.status(200).json(result.slice(0, 10) ?? "not found");
}
