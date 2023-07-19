import { getDocumentByResourceId } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/allergyIntolerance/{id}:
 *   get:
 *     description: Returns a single Allergy Intolerance entry
 *     tags:
 *       - Allergy Intolerance
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 09cb15dc-3a3d-b5f8-1d04-2968a67975f1
 *         description: String ID (within resource.id) of the Allergy Intolerance to get
 *     responses:
 *       200:
 *         description: Returns a single Allergy Intolerance entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("AllergyIntolerance", id);
  
  res.status(200).json(result ?? "not found");
}
