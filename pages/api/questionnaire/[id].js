import { getDocumentById, deleteDocument } from "../../../lib/mongodb";

/**
 * @swagger
 * /api/questionnaire/{id}:
 *   get:
 *     description: Returns a single questionnaire entry
 *     tags:
 *       - Questionnaire
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 4
 *         description: String ID (within resource.id) of the questionnaire to get
 *     responses:
 *       200:
 *         description: Returns a single questionnaire entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentById("Questionnaire", id);
  
  res.status(200).json(result ?? "not found");
}

/**
 * @swagger
 * /api/questionnaire/{id}:
 *   delete:
 *     description: Deletes a single Questionnaire
 *     tags:
 *       - Questionnaire
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: String ID (within resource.id) of the Questionnaire to delete
 *     responses:
 *       200:
 *         description: Deletes a single Questionnaire
 */
async function handleDelete(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await deleteDocument("Questionnaire", id);

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
