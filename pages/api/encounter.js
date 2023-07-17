import { getDocuments } from "../../lib/mongodb";

/**
 * @swagger
 * /api/encounter:
 *   get:
 *     description: Returns First 10 Encounter entries
 *     tags:
 *       - Encounter
 *     responses:
 *       200:
 *         description: Returns First 10 Encounter entries
 */
async function handleGet(req, res) {
  const data = await getDocuments("Encounter", 10);

  res.status(200).json(data);
}

const

/**
 * @swagger
 * /api/encounter:
 *   post:
 *     description: Creates new Instance of Encounter
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
 *       - Encounter
 *     responses:
 *       200:
 *         description: Creates new Instance of Encounter
 */
async function handlePost(req, res) {}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }

  if (req.method === "POST") {
    await handlePost(req, res);
  }
}
