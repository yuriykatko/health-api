import { getDocumentsRelatedToSubject } from "../../../../lib/mongodb";

/**
 * @swagger
 * /api/patient/{id}/imagingStudy:
 *   get:
 *     description: Returns First 10 Imaging Study entries for given Patient
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 479e6c57-e333-b5fb-4e42-c42ca864660d
 *         description: String ID (within resource.id) of the Patient to get Imaging Study entries for
 *     responses:
 *       200:
 *         description: Returns First 10 Imaging Study entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const data = await getDocumentsRelatedToSubject("ImagingStudy", id, 10);

  res.status(200).json(data);
}
