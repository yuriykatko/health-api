
/**
 * @swagger
 * /api/health-check:
 *   get:
 *     description: API Health Check
 *     responses:
 *       200:
 *         description: Returns API status
 */
export default async function handler(req, res) {
  res.status(200).json("ok");
}
