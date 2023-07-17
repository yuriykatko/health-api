import { getDocumentById, deleteDocument } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/encounter/{id}:
 *   get:
 *     description: Returns a single Encounter entry
 *     tags:
 *       - Encounter
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 009d5fb1-0473-e23a-b0c8-c2c3387fc1d7
 *         description: String ID (within resource.id) of the Encounter to get
 *     responses:
 *       200:
 *         description: Returns a single Encounter entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Encounter", id);

  res.status(200).json(result ?? "not found");
}

/**
 * @swagger
 * /api/encounter/{id}:
 *   delete:
 *     description: Deletes a single Encounter
 *     tags:
 *       - Encounter
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 00000000-1111-2222-3333-444444444444
 *         description: String ID (within resource.id) of the Encounter to delete
 *     responses:
 *       200:
 *         description: Deletes a single Encounter
 */
async function handleDelete(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await deleteDocument("Encounter", id);

  res.status(200).json(result);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }

  if (req.method === "DELETE") {
    await handleDelete(req, res);
  }
}
