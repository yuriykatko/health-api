import { getDocumentByResourceId } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/observation/{id}:
 *   get:
 *     description: Returns a single Observation entry
 *     tags:
 *       - Observation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 29bba017-5c4c-a652-fb9f-da99f3fe0a2f
 *         description: String ID (within resource.id) of the Observation to get
 *     responses:
 *       200:
 *         description: Returns a single Observation entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("Observation", id);
  
  res.status(200).json(result ?? "not found");
}
