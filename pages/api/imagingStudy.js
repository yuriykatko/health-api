import data from "../../data/ImagingStudy";

/**
 * @swagger
 * /api/imagingStudy:
 *   get:
 *     description: Returns all Imaging Study entries
 *     tags:
 *       - Imaging Study
 *     responses:
 *       200:
 *         description: Returns all Imaging Study entries
 */
export default async function handler(req, res) {
  res.status(200).json(data);
}
