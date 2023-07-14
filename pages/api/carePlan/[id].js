import data from "../../../data/CarePlan";

/**
 * @swagger
 * /api/carePlan/{id}:
 *   get:
 *     description: Returns a single Care Plan entry
 *     tags:
 *       - Care Plan
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: fd0cfd79-aaa8-b8c8-4c2c-9da589994166
 *         description: String ID (within resource.id) of the Care Plan to get
 *     responses:
 *       200:
 *         description: Returns a single Care Plan entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
