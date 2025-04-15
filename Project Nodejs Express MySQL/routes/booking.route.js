const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Chỉ admin được quyền xem tất cả booking
/**
 * @swagger
 * tags:
 *   - name: Bookings
 *     description: Booking management
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get list of all bookings (only accessible by admin)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   user_id:
 *                     type: integer
 *                   tour_id:
 *                     type: integer
 *                   booking_date:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                     enum: [pending, confirmed, cancelled]
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 */
router.get('/', authenticate, authorize(["admin"]), bookingController.getAllBooking);

// Admin hoặc chính user đó được xem thông tin booking, đặt tour, sửa và hủy đặt tour
/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get booking details by ID (accessible by admin or the user who made the booking)
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Booking details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 tour_id:
 *                   type: integer
 *                 booking_date:
 *                   type: string
 *                   format: date-time
 *                 status:
 *                   type: string
 *                   enum: [pending, confirmed, cancelled]
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have permission to access this booking)
 *       404:
 *         description: Booking not found
 */
router.get('/:id', authenticate, authorize(["admin", "user"]), bookingController.getBookingById);

/**
 * @swagger
 * /api/bookings/user/{userId}:
 *   get:
 *     summary: Get bookings by user ID (only accessible by admin)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of bookings by user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   user_id:
 *                     type: integer
 *                   tour_id:
 *                     type: integer
 *                   booking_date:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                     enum: [pending, confirmed, cancelled]
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 *       404:
 *         description: No bookings found for user
 */
router.get('/user/:userId', authenticate, authorize(["admin"]), bookingController.getBookingsByUserId);

/**
 * @swagger
 * /api/bookings/tour/{tourId}:
 *   get:
 *     summary: Get bookings by tour ID (only accessible by admin)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: Tour ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of bookings for a specific tour
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   user_id:
 *                     type: integer
 *                   tour_id:
 *                     type: integer
 *                   booking_date:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                     enum: [pending, confirmed, cancelled]
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       403:
 *         description: Forbidden (user does not have admin role)
 *       404:
 *         description: No bookings found for tour
 */
router.get('/tour/:tourId', authenticate, authorize(["admin"]), bookingController.getBookingsByTourId);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking (accessible by admin or user)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - tour_id
 *             properties:
 *               user_id:
 *                 type: integer
 *               tour_id:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, cancelled]
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Bad request (invalid or missing data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 */
router.post('/', authenticate, authorize(["admin", "user"]), bookingController.createBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     summary: Update booking information (accessible by admin or user)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id: 
 *                 type: integer
 *               tour_id:
 *                 type: interger
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, cancelled]
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       400:
 *         description: Bad request (invalid or missing data)
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       404:
 *         description: Booking not found
 */
router.put('/:id', authenticate, authorize(["admin", "user"]), bookingController.updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking (accessible by admin or user)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       404:
 *         description: Booking not found
 */
router.delete('/:id', authenticate, authorize(["admin", "user"]), bookingController.deleteBooking);

module.exports = router;
