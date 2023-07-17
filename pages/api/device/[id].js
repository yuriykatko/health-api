import { getDocumentById } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/device/{id}:
 *   get:
 *     description: Returns a single Device entry
 *     tags:
 *       - Device
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 2eef4446-c82b-fd7d-5d02-804f110233ae
 *         description: String ID (within resource.id) of the Device to get
 *     responses:
 *       200:
 *         description: Returns a single Device entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Device", id);
  
  res.status(200).json(result ?? "not found");
}
