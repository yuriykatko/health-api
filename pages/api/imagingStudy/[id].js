import { getDocumentByResourceId } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/imagingStudy/{id}:
 *   get:
 *     description: Returns a single Imaging Study entry
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 74510969-1c98-4a58-f412-24076511b4c8
 *         description: String ID (within resource.id) of the Imaging Study to get
 *     responses:
 *       200:
 *         description: Returns a single Imaging Study entry
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("ImagingStudy", id);
  
  res.status(200).json(result ?? "not found");
}
