import data from "../../../data/Immunization";

/**
 * @swagger
 * /api/immunization/{id}:
 *   get:
 *     description: Returns a single Immunization entry
 *     tags:
 *       - Immunization
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 16600eed-2684-098e-af79-643fd3b1f8d4
 *         description: String ID (within resource.id) of the Immunization to get
 *     responses:
 *       200:
 *         description: Returns a single Immunization entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
