import { getFirstNDocumentsInCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/imagingStudy:
 *   get:
 *     description: Returns First 10 Imaging Study entries
 *     tags:
 *       - Imaging Study
 *     responses:
 *       200:
 *         description: Returns First 10 Imaging Study entries
 */
export default async function handler(req, res) {
  const data = await getFirstNDocumentsInCollection("ImagingStudy", 10);

  res.status(200).json(data);
}
