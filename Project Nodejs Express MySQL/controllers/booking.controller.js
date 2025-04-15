const Booking = require('../models/booking.model');
const User = require("../models/user.model");
const Tour = require('../models/tour.model');

const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.json(bookings);
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const getBookingById = async (req, res) => {
    const { id } = req.params;
  
    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const getBookingsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.findByUserId(userId);
        res.json(bookings);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const getBookingsByTourId = async (req, res) => {
    const { tourId } = req.params;

    try {
        const bookings = await Booking.findByTourId(tourId);
        res.json(bookings);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const createBooking = async (req, res) => {
    const { user_id, tour_id, status } = req.body;

    try {
        const user = await User.findById(user_id);
        const tour = await Tour.findById(tour_id);
        if (!user || !tour) 
            return res.json({ 
                message: 'Invalid user or tour' 
            });
        const booking = { user_id, tour_id, status };
        await Booking.create(booking);

        res.json({ 
            message: 'Booking created successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const updateBooking = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.json({ 
                message: 'Booking not found' 
            });
        }

        await Booking.update(id, status);
        res.json({ 
            message: 'Booking updated successfully' 
        });
    } catch (err) {
        res.json({
            message: 'Server error', 
            error: err.message 
        });
    }
};

const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.json({ 
                message: 'Booking not found' 
            });
        }

        await Booking.delete(id);
        res.json({ 
            message: 'Booking deleted successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

module.exports = { getAllBooking, getBookingById, getBookingsByUserId, getBookingsByTourId, createBooking, updateBooking, deleteBooking };
