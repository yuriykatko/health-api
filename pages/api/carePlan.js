import data from "../../data/CarePlan";

/**
 * @swagger
 * /api/carePlan:
 *   get:
 *     description: Returns Care Plans
 *     tags:
 *       - Care Plan
 *     responses:
 *       200:
 *         description: Returns All Care Plans
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
