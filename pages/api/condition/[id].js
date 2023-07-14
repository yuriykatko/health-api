import { getDocumentById } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/condition/{id}:
 *   get:
 *     description: Returns a single Condition entry
 *     tags:
 *       - Condition
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 7e590a6e-2e78-e6fb-fd5d-36c4fa68308f
 *         description: String ID (within resource.id) of the Condition to get
 *     responses:
 *       200:
 *         description: Returns a single Condition entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Condition", id);
  
  res.status(200).json(result ?? "not found");
}
