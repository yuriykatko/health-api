import {
  getDocumentByResourceId,
  deleteDocument,
  updateDocument,
} from "../../../lib/mongodb";

/**
 * @swagger
 * /api/documentReference/{id}:
 *   get:
 *     description: Returns a single Document Reference entry
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 00000000-1111-2222-3333-444444444444
 *         description: String ID (within resource.id) of the Document Reference to get
 *     responses:
 *       200:
 *         description: Returns a single Document Reference entry
 */
async function handleGet(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await getDocumentByResourceId("DocumentReference", id);

  res.status(200).json(result ?? "not found");
}

/**
 * @swagger
 * /api/documentReference/{id}:
 *   delete:
 *     description: Deletes a single Document Reference
 *     tags:
 *       - FHIR
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 00000000-1111-2222-3333-444444444444
 *         description: String ID (within resource.id) of the Document Reference to delete
 *     responses:
 *       200:
 *         description: Deletes a single Document Reference
 */
async function handleDelete(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await deleteDocument("DocumentReference", id);

  res.status(200).json(result);
}

/**
 * @swagger
 * /api/documentReference/{id}:
 *   put:
 *     description: Updates a Document Reference
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        default: 00000000-1111-2222-3333-444444444444
 *        description: String ID (within resource.id) of the Encounter to delete     
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               fullUrl: urn:uuid:00000000-1111-2222-3333-444444444444
 *               resource:
 *                 resourceType: DocumentReference
 *                 id: 00000000-1111-2222-3333-444444444444
 *                 meta:
 *                   profile:
 *                     - http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
 *                 identifier:
 *                   - system: urn:ietf:rfc:3986
 *                     value: urn:uuid:200273f7-8c62-94e1-c340-e99cf9f078ad
 *                 status: superseded
 *                 type:
 *                    coding:
 *                      - system: http://loinc.org
 *                        code: 34117-2
 *                        display: History and physical note
 *                      - system: http://loinc.org
 *                        code: 51847-2
 *                        display: Evaluation+Plan note
 *                 category:
 *                    - coding:
 *                        - system: http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category
 *                          code: clinical-note
 *                          display: Clinical Note
 *                 subject:
 *                   reference: urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1
 *                 date: 1944-04-23T02:40:58.908-04:00
 *                 author:
 *                   - reference: Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779
 *                     display: Dr. Ingrid581 Jacobson885
 *                 custodian:
 *                   reference: Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb
 *                   display: BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH
 *                 content:
 *                   - attachment:
 *                       contentType: text/plain; charset=utf-8
 *                       data: SSBkb250IGtub3cgd2h5IEkgbmVlZCB0byBiYXNlNjQgdGhpcw==
 *                     format:
 *                       system: http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem
 *                       code: urn:ihe:iti:xds:2017:mimeTypeSufficient
 *                       display: mimeType Sufficient
 *                 context:
 *                   encounter:
 *                     - reference: urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26
 *                   period:
 *                     start: 1944-04-23T02:40:58-04:00
 *                     end: 1944-04-23T03:40:58-04:00
 *               request:
 *                 method: POST
 *                 url: DocumentReference
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Updates a Document Reference
 */
async function handleUpdate(req, res) {
  const query = req.query;
  const { id } = query;
  const result = await updateDocument("DocumentReference", id, req.body);

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
