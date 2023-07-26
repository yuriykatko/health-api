import {
  getDocumentByResourceId,
  deleteDocument,
  updateDocument,
} from "../../../lib/mongodb";

/**
 * @swagger
 * /api/encounter/{id}:
 *   get:
 *     description: Returns a single Encounter entry
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 00000000-1111-2222-3333-444444444444
 *         description: String ID (within resource.id) of the Encounter to get
 *     responses:
 *       200:
 *         description: Returns a single Encounter entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("Encounter", id);

  res.status(200).json(result ?? "not found");
}

/**
 * @swagger
 * /api/encounter/{id}:
 *   delete:
 *     description: Deletes a single Encounter
 *     tags:
 *       - FHIR
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

/**
 * @swagger
 * /api/encounter/{id}:
 *   put:
 *     description: Updates an Encounter
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 00000000-1111-2222-3333-444444444444
 *         description: String ID (within resource.id) of the Encounter to delete
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               fullUrl: urn:uuid:00000000-1111-2222-3333-444444444444
 *               resource:
 *                 resourceType: Encounter
 *                 id: 00000000-1111-2222-3333-444444444444
 *                 status: finished
 *                 class:
 *                   system: http://terminology.hl7.org/CodeSystem/v3-ActCode
 *                   code: AMB
 *                 type:
 *                   - coding:
 *                       - system: http://snomed.info/sct
 *                         code: "185347001"
 *                         display: Encounter for problem
 *                     text: Encounter for problem
 *                 subject:
 *                   reference: urn:uuid:0a56854c-d96f-e6b8-40fb-d55b3e438d27
 *                   display: Ms. Anna632 Brekke496
 *                 participant:
 *                   - type:
 *                       - coding:
 *                           - system: http://terminology.hl7.org/CodeSystem/v3-ParticipationType
 *                             code: PPRF
 *                             display: primary performer
 *                         text: primary performer
 *                     period:
 *                       start: 1984-09-16T22:41:48-04:00
 *                       end: 1984-09-16T22:56:48-04:00
 *                     individual:
 *                       reference: Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999998479
 *                       display: Dr. Terese90 Marquardt819
 *                 period:
 *                   start: 1984-09-16T22:41:48-04:00
 *                   end: 1984-09-16T22:56:48-04:00
 *                 serviceProvider:
 *                   reference: Organization?identifier=https://github.com/synthetichealth/synthea|602404f0-064c-34d0-bb51-1d024bd51bc0
 *                   display: Niagara Health System - Port Colborne General Site
 *               request:
 *                 method: POST
 *                 url: Encounter
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Creates new Instance of Encounter
 */
async function handleUpdate(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await updateDocument("Encounter", id, req.body);

  res.status(200).json(result);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }

  if (req.method === "DELETE") {
    await handleDelete(req, res);
  }

  if (req.method === "PUT") {
    await handleUpdate(req, res);
  }
}
