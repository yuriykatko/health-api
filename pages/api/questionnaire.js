import { getDocuments, addDocumentToCollection } from "../../lib/mongodb";

/**
 * @swagger
 * /api/questionnaire:
 *   get:
 *     description: Returns First 10 Questionnaire entries
 *     tags:
 *       - Questionnaire
 *     responses:
 *       200:
 *         description: Returns First 10 Questionnaire entries
 */
async function handleGet(req, res) {
  const data = await getDocuments("Questionnaire", 10);

  res.status(200).json(data);
}

/**
 * @swagger
 * /api/questionnaire:
 *   post:
 *     description: Creates new Instance of Questionnaire
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - Questionnaire
 *     responses:
 *       200:
 *         description: Creates new Instance of Questionnaire
 */
async function handlePost(req, res) {
  const result = await addDocumentToCollection(req.body, "Questionnaire");
  
  res.status(200).json(result); 
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }

  if (req.method === "POST") {
    await handlePost(req, res);
  }

  res.status(200).json("ok");
}
