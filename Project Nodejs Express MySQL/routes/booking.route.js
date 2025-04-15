const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Chỉ admin được quyền xem tất cả booking
router.get('/', authenticate, authorize(["admin"]), bookingController.getAllBooking);
// Admin hoặc chính user đó được xem thông tin booking, đặt tour, sửa và hủy đặt tour
router.get('/:id', authenticate, authorize(["admin", "user"]), bookingController.getBookingById);
router.get('/user/:userId', authenticate, authorize(["admin"]), bookingController.getBookingsByUserId);
router.get('/tour/:tourId', authenticate, authorize(["admin"]), bookingController.getBookingsByTourId);
router.post('/', authenticate, authorize(["admin", "user"]), bookingController.createBooking);
router.put('/:id', authenticate, authorize(["admin", "user"]), bookingController.updateBooking);
router.delete('/:id', authenticate, authorize(["admin", "user"]), bookingController.deleteBooking);

module.exports = router;
