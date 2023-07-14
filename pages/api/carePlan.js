import { getDocuments } from "../../lib/mongodb";

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
  const data = await getDocuments("CarePlan", 10);
  
  res.status(200).json(data.slice(0, 10));
}
