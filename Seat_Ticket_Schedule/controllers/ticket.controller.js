const Ticket = require("../models/ticket.model");

const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.json(tickets);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const getTicketById = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            return res.json({ 
                message: 'Ticket not found' 
            });
        }
        res.json(ticket);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const createTicket = async (req, res) => {
    const { seat_id, schedule_id, departure_time, arrival_time, seat_type, price, status } = req.body;

    try {
        const ticket = { seat_id, schedule_id, departure_time, arrival_time, seat_type, price, status };
        await Ticket.create(ticket);

        res.json({ 
            message: 'Ticket created successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { seat_id, schedule_id, departure_time, arrival_time, seat_type, price, status } = req.body;

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            return res.json({ 
                message: 'Ticket not found' 
            });
        }

        await Ticket.update(id, { seat_id, schedule_id, departure_time, arrival_time, seat_type, price, status });
        res.json({ 
            message: 'Ticket updated successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            return res.json({ 
                message: 'Ticket not found' 
            });
        }

        await Ticket.delete(id);
        res.json({ 
            message: 'Ticket deleted successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

module.exports = { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket };