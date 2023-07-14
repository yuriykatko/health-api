import data from "../../../data/Encounter";

/**
 * @swagger
 * /api/encounter/{id}:
 *   get:
 *     description: Returns a single Encounter entry
 *     tags:
 *       - Encounter
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 009d5fb1-0473-e23a-b0c8-c2c3387fc1d7
 *         description: String ID (within resource.id) of the Encounter to get
 *     responses:
 *       200:
 *         description: Returns a single Encounter entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
