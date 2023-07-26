import { getDocumentByResourceId } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/claim/{id}:
 *   get:
 *     description: Returns a single Claim entry
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: e5fd2f96-bb09-b6f2-7675-1306e763f0b1
 *         description: String ID (within resource.id) of the Claim to get
 *     responses:
 *       200:
 *         description: Returns a single Claim entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("Claim", id);
  
  res.status(200).json(result ?? "not found");
}
