import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/device:
 *   get:
 *     description: Returns First 10 Device entries
 *     tags:
 *       - Device
 *     responses:
 *       200:
 *         description: Returns First 10 Device entries
 */
export default async function handler(req, res) {
  const data = await getDocuments("Device", 10);

  res.status(200).json(data);
}
