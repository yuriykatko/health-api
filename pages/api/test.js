
/**
 * @swagger
 * /api/test:
 *   post:
 *     description: Test if post works
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     tags:
 *       - Test
 *     responses:
 *       200:
 *         description: POST works
 */
export default async function handler(req, res) {
    if (req.method === "POST") {
        res.status(200).json("ok");
    }
  }