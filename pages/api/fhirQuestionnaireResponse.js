/**
 * @swagger
 * /api/fhirQuestionnaireResponse:
 *   post:
 *     description: Creates new instance of FHIR Questionnaire Response
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - FHIR
 *     responses:
 *       200:
 *         description: Creates new instance of FHIR Questionnaire Response
 */
async function handlePost(req, res) {
    const response = await fetch(
      "https://hapi.fhir.org/baseR4/QuestionnaireResponse",
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
    if (req.method === "POST") {
      await handlePost(req, res);
    }
  
    if (req.method === "OPTIONS") {
      res.status(200).json("ok");
    }
  }