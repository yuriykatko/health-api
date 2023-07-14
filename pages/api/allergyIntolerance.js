import data from "../../data/AllergyIntolerance";

/**
 * @swagger
 * /api/allergyIntolerance:
 *   get:
 *     description: Returns First 10 Allergy Intolerance entries
 *     tags:
 *       - Allergy Intolerance
 *     responses:
 *       200:
 *         description: Returns First 10 Allergy Intolerance entries
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
