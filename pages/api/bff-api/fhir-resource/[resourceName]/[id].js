import { getResourceById } from "../../../../../lib/hapi";

/**
 * @swagger
 * /api/bff-api/fhir-resource/{resourceName}/{id}:
 *   get:
 *     description: Returns a single FHIR Resource
 *     tags:
 *       - Front End API - FHIR Resource
 *     parameters:
 *       - in: path 
 *         name: resourceName
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: Name of FHIR resource
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 1
 *         description: ID of FHIR resource
 *     responses:
 *       200:
 *         description: Returns a single FHIR Resource
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id, resourceName } = query;
  const result = await getResourceById(resourceName, id);

  res.status(200).json(result ?? "not found");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }
}
