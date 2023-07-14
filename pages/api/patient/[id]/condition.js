import { getDocumentsRelatedToSubject } from "../../../../lib/mongodb";

/**
 * @swagger
 * /api/patient/{id}/condition:
 *   get:
 *     description: Returns First 10 Condition entries for given Patient
 *     tags:
 *       - Patient
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 0a56854c-d96f-e6b8-40fb-d55b3e438d27
 *         description: String ID (within resource.id) of the Patient to get Conditions for
 *     responses:
 *       200:
 *         description: Returns First 10 Condition entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const data = await getDocumentsRelatedToSubject("Condition", id, 10);

  res.status(200).json(data);
}
