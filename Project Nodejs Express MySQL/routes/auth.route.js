const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     description: Register
 *     requestBody:
 *          content:
 *              application/x-www-form-urlencoded: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name: 
 *                              description: register name
 *                              type: string
 *                          email: 
 *                              description: register email
 *                              type: string
 *                          password: 
 *                              description: register password
 *                              type: string
 *                          role: 
 *                              description: register role
 *                              type: string
 *     responses:
 *       201:
 *         description: Register Successfully !!!!
 */
router.post('/register', authController.register);
/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     description: Login
 *     requestBody:
 *          content:
 *              application/x-www-form-urlencoded: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          email: 
 *                              description: login email
 *                              type: string
 *                          password: 
 *                              description: login password
 *                              type: string
 *     responses:
 *       200:
 *         description: Register Successfully !!!!
 */
router.post('/login', authController.login);

module.exports = router;
