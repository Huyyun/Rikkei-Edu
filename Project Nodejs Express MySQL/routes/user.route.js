const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Chỉ admin được quyền xem tất cả user
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User management
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (only accessible by admin)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 */
router.get('/', authenticate, authorize(["admin"]), userController.getAllUsers);

// Admin hoặc chính user đó được xem thông tin cá nhân
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID (accessible by admin and the user themselves)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have permission to view this profile)
 *       404:
 *         description: User not found
 */
router.get('/:id', authenticate, authorize(["admin", "user"]), userController.getUserById);

// Chỉ admin được thêm, sửa, xóa user, user có thể sử chính mình
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user (only accessible by admin)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum:
 *                   - admin
 *                   - user
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request (missing or invalid data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 */
router.post('/', authenticate, authorize(["admin"]), userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user information (accessible by admin or the user themselves)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request (invalid or missing data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have permission to edit this user)
 *       404:
 *         description: User not found
 */
router.put('/:id', authenticate, authorize(["admin", "user"]), userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user (only accessible by admin)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 *       404:
 *         description: User not found
 */
router.delete('/:id', authenticate, authorize(["admin"]), userController.deleteUser);

module.exports = router;
