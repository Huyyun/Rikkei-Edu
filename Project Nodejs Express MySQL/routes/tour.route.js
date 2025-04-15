const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Mọi user và admin đều có thể xem danh sách tour và chi tiết tt 1 tour
/**
/**
 * @swagger
 * tags:
 *   - name: Tours
 *     description: Tour management
 */

/**
 * @swagger
 * /api/tours:
 *   get:
 *     summary: Get list of all tours (accessible by everyone)
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: List of all tours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   location:
 *                     type: string
 *                   start_date:
 *                     type: string
 *                     format: date
 *                   end_date:
 *                     type: string
 *                     format: date
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Unauthorized (invalid or missing token)
 */
router.get('/', tourController.getAllTours);

/**
 * @swagger
 * /api/tours/{id}:
 *   get:
 *     summary: Get tour details by ID (accessible by everyone)
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tour ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tour information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                   format: float
 *                 location:
 *                   type: string
 *                 start_date:
 *                   type: string
 *                   format: date
 *                 end_date:
 *                   type: string
 *                   format: date
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       404:
 *         description: Tour not found
 */
router.get('/:id', tourController.getTourById);

// Chỉ admin mới có quyền tạo, sửa, xoá tour
/**
 * @swagger
 * /api/tours:
 *   post:
 *     summary: Create a new tour (only accessible by admin)
 *     tags: [Tours]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - start_date
 *               - end_date
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               location:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Tour created successfully
 *       400:
 *         description: Bad request (invalid or missing data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 */
router.post('/', authenticate, authorize(["admin"]), tourController.createTour);

/**
 * @swagger
 * /api/tours/{id}:
 *   put:
 *     summary: Update tour information (only accessible by admin)
 *     tags: [Tours]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tour ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               location:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               end_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *       400:
 *         description: Bad request (invalid or missing data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 *       404:
 *         description: Tour not found
 */
router.put('/:id', authenticate, authorize(["admin"]), tourController.updateTour);

/**
 * @swagger
 * /api/tours/{id}:
 *   delete:
 *     summary: Delete a tour (only accessible by admin)
 *     tags: [Tours]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tour ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tour deleted successfully
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 *       404:
 *         description: Tour not found
 */
router.delete('/:id', authenticate, authorize(["admin"]), tourController.deleteTour);

module.exports = router;
