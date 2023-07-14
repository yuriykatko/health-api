import data from "../../data/CarePlan";

/**
 * @swagger
 * /api/carePlan:
 *   get:
 *     description: Returns First 10 Care Plans
 *     tags:
 *       - Care Plan
 *     responses:
 *       200:
 *         description: Returns First 10 Care Plans
 */
export default async function handler(req, res) {
  res.status(200).json(data.slice(0, 10));
}
