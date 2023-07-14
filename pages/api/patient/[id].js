import data from "../../../data/Patient";

/**
 * @swagger
 * /api/patient/{id}:
 *   get:
 *     description: Returns a single Patient
 *     tags:
 *       - Patient
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 0a56854c-d96f-e6b8-40fb-d55b3e438d27
 *         description: String ID (within resource.identifier) of the Patient to get
 *     responses:
 *       200:
 *         description: Returns a single Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
