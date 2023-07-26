/**
 * @swagger
 * /api/fhirQuestionnaire:
 *   get:
 *     description: Returns FHIR Questionnaires
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Returns FHIR Questionnaires
 */
async function handleGet(req, res) {
  const response = await fetch(
    "https://hapi.fhir.org/baseR4/Questionnaire/10963051"
  );
  const json = await response.json();

  res.status(200).json(json);
}

/**
 * @swagger
 * /api/fhirQuestionnaire:
 *   post:
 *     description: Creates new instance of FHIR Questionnaire
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Creates new instance of FHIR Questionnaire
 */
async function handlePost(req, res) {
  const response = await fetch(
    "https://hapi.fhir.org/baseR4/Questionnaire",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    }
  );
  const json = await response.json();

  res.status(200).json(json);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    await handleGet(req, res);
  }

  if (req.method === "POST") {
    await handlePost(req, res);
  }

  if (req.method === "OPTIONS") {
    res.status(200).json("ok");
  }
}
