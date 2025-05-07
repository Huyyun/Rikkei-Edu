const db = require('../config/db');

const Schedule = {
    // Tìm tất cả lịch trình
    findAll: async () => {
        return db('schedules')
        .select();
    },

    // Tìm lịch trình theo ID
    findById: async (id) => {
        return db('schedules')
        .where({ id })
        .first();
    },

    // Tạo lịch trình mới
    create: async (schedule) => {
        return db('schedules')
        .insert({
            route_id: schedule.route_id,
            bus_id: schedule.bus_id,
            departure_time: schedule.departure_time,
            arrival_time: schedule.arrival_time,
            available_seats: schedule.available_seats,
            total_seats: schedule.total_seats,
            status: schedule.status,
        });
    },

    // Cập nhật lịch trình
    update: async (id, schedule) => {
        return db('schedules')
        .where({ id })
        .update({
            route_id: schedule.route_id,
            bus_id: schedule.bus_id,
            departure_time: schedule.departure_time,
            arrival_time: schedule.arrival_time,
            available_seats: schedule.available_seats,
            total_seats: schedule.total_seats,
            status: schedule.status,
        });
    },

    // Xoá lịch trình
    delete: async (id) => {
        return db('schedules')
        .where({ id })
        .del();
    }
};

module.exports = Schedule;