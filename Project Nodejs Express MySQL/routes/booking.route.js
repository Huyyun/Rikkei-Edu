const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.get('/', bookingController.getAllBooking);
router.get('/:id', bookingController.getBookingById);
router.get('/user/:userId', bookingController.getBookingsByUserId);
router.get('/tour/:tourId', bookingController.getBookingsByTourId);
router.post('/', bookingController.createBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
