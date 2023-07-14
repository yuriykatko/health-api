import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/explanationOfBenefit:
 *   get:
 *     description: Returns First 10 Explanation Of Benefit entries
 *     tags:
 *       - Explanation Of Benefit
 *     responses:
 *       200:
 *         description: Returns First 10 Explanation Of Benefit entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("ExplanationOfBenefit", 10);

  res.status(200).json(data);
}
