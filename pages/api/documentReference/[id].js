import { getDocumentById } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/documentReference/{id}:
 *   get:
 *     description: Returns a single Document Reference entry
 *     tags:
 *       - Document Reference
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 5038570f-7e47-2c79-2929-20cdb3891541
 *         description: String ID (within resource.id) of the Document Reference to get
 *     responses:
 *       200:
 *         description: Returns a single Document Reference entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("DocumentReference", id);

  res.status(200).json(result ?? "not found");
}


export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }
}
