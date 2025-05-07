const Seat = require("../models/seat.model");

const getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.findAll();
        res.json(seats);
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const getSeatById = async (req, res) => {
    try {
            const seat = await Seat.findById(req.params.id);
            if (!seat) {
                return res.json({ 
                    message: "Seat not found" 
                });
            }
            res.json(seat);
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const createSeat = async (req, res) => {
    const { bus_id, seat_number, seat_type, status, price_for_type_seat } = req.body;
    
    try {
        const seat = { bus_id, seat_number, seat_type, status, price_for_type_seat };
        await Seat.create(seat);

        res.json({ 
            message: "Seat created" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const updateSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) {
            return res.json({ 
                message: "Seat not found" 
            });
        }
        const { bus_id, seat_number, seat_type, status, price_for_type_seat } = req.body;
        await Seat.update(req.params.id, { bus_id, seat_number, seat_type, status, price_for_type_seat });
        res.json({ 
            message: "Seat updated" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) {
            return res.json({ 
                message: "Seat not found" 
            });
        }
        await Seat.delete(req.params.id);
        res.json({ 
            message: "Seat deleted" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

module.exports = { getAllSeats, getSeatById, createSeat, updateSeat, deleteSeat };
