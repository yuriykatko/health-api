import data from "../../../data/ExplanationOfBenefit";

/**
 * @swagger
 * /api/explanationOfBenefit/{id}:
 *   get:
 *     description: Returns a single Explanation Of Benefit entry
 *     tags:
 *       - Explanation Of Benefit
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 0ffac588-827f-04db-90d4-efd71a71fd47
 *         description: String ID (within resource.id) of the Explanation Of Benefit to get
 *     responses:
 *       200:
 *         description: Returns a single Explanation Of Benefit entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = data.find((item) => item.resource.id === id);

  res.status(200).json(result ?? "not found");
}
