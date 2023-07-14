import data from "../../data/AllergyIntolerance";

/**
 * @swagger
 * /api/allergyIntolerance:
 *   get:
 *     description: Returns All Allergy Intolerance entries
 *     tags:
 *       - Allergy Intolerance
 *     responses:
 *       200:
 *         description: Returns All Allergy Intolerance entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
