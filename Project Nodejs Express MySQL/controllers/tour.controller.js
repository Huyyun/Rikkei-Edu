const Tour = require('../models/tour.model');

const getAllTours = async (req, res) => {
    try {
        const tours = await Tour.findAll();
        res.json(tours);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const getTourById = async (req, res) => {
    const { id } = req.params;

    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.json({ 
                message: 'Tour not found' 
            });
        }
        res.json(tour);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const createTour = async (req, res) => {
    const { title, description, price, location, start_date, end_date } = req.body;

    try {
        const tour = { title, description, price, location, start_date, end_date };
        await Tour.create(tour);

        res.json({ 
            message: 'Tour created successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const updateTour = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, location, start_date, end_date } = req.body;

    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.json({ 
                message: 'Tour not found' 
            });
        }

        await Tour.update(id, { title, description, price, location, start_date, end_date });
        res.json({ 
            message: 'Tour updated successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const deleteTour = async (req, res) => {
    const { id } = req.params;

    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.json({ 
                message: 'Tour not found' 
            });
        }

        await Tour.delete(id);
        res.json({ 
            message: 'Tour deleted successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

module.exports = { getAllTours, getTourById, createTour, updateTour, deleteTour };
