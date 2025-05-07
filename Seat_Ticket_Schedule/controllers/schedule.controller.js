const Schedule = require("../models/schedule.model");

const getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll();
        res.json(schedules);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const getScheduleById = async (req, res) => {
    const { id } = req.params;

    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            return res.json({ 
                message: 'Schedule not found' 
            });
        }
        res.json(schedule);
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const createSchedule = async (req, res) => {
    const { route_id, bus_id, departure_time, arrival_time, available_seats, total_seats, status } = req.body;

    try {
        const schedule = { route_id, bus_id, departure_time, arrival_time, available_seats, total_seats, status };
        await Schedule.create(schedule);

        res.json({ 
            message: 'Schedule created successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const updateSchedule = async (req, res) => {
    const { id } = req.params;
    const { route_id, bus_id, departure_time, arrival_time, available_seats, total_seats, status } = req.body;

    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            return res.json({ 
                message: 'Schedule not found' 
            });
        }

        await Schedule.update(id, { route_id, bus_id, departure_time, arrival_time, available_seats, total_seats, status });
        res.json({ 
            message: 'Schedule updated successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

const deleteSchedule = async (req, res) => {
    const { id } = req.params;

    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            return res.json({ 
                message: 'Schedule not found' 
            });
        }

        await Schedule.delete(id);
        res.json({ 
            message: 'Schedule deleted successfully' 
        });
    } catch (err) {
        res.json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
};

module.exports = { getAllSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule };