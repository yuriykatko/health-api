import data from "../../../data/CareTeam";

/**
 * @swagger
 * /api/careTeam/{id}:
 *   get:
 *     description: Returns a single Care Team entry
 *     tags:
 *       - Care Team
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 40acc60e-bf5d-c738-29ee-82920f057b84
 *         description: String ID (within resource.id) of the Care Team to get
 *     responses:
 *       200:
 *         description: Returns a single Care Team entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
