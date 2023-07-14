import data from "../../../data/Procedure";

/**
 * @swagger
 * /api/procedure/{id}:
 *   get:
 *     description: Returns a single Procedure entry
 *     tags:
 *       - Procedure
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 6e0d29cd-7802-6bd0-d508-ecd9f37defc6
 *         description: String ID (within resource.id) of the Procedure to get
 *     responses:
 *       200:
 *         description: Returns a single Procedure entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
