import { getDocumentsRelatedToPatient } from "../../../../lib/mongodb";

/**
 * @swagger
 * /api/patient/{id}/device:
 *   get:
 *     description: Returns First 10 Device entries for given Patient
 *     tags:
 *       - Patient
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 9d92805b-c25a-c7ad-60ca-80c93ffb80b1
 *         description: String ID (within resource.id) of the Patient to get Devices for
 *     responses:
 *       200:
 *         description: Returns First 10 Device entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const data = await getDocumentsRelatedToPatient("Device", id, 10);

  res.status(200).json(data);
}
