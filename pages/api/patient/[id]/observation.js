import { getDocumentsRelatedToSubject } from "../../../../lib/mongodb";

/**
 * @swagger
 * /api/patient/{id}/observation:
 *   get:
 *     description: Returns First 10 Observation entries for given Patient
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 0a56854c-d96f-e6b8-40fb-d55b3e438d27
 *         description: String ID (within resource.id) of the Patient to get Observations for
 *     responses:
 *       200:
 *         description: Returns First 10 Observation entries for given Patient
 */
export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const data = await getDocumentsRelatedToSubject("Observation", id, 10);

  res.status(200).json(data);
}
