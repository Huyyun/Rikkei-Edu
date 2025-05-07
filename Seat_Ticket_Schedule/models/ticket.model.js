const db = require('../config/db');

const Ticket = {
    // Tìm tất cả lịch trình
    findAll: async () => {
        return db('tickets')
        .select();
    },

    // Tìm lịch trình theo ID
    findById: async (id) => {
        return db('tickets')
        .where({ id })
        .first();
    },

    // Tạo lịch trình mới
    create: async (ticket) => {
        return db('tickets')
        .insert({
            seat_id: ticket.seat_id,
            schedule_id: ticket.schedule_id,
            departure_time: ticket.departure_time,
            arrival_time: ticket.arrival_time,
            seat_type: ticket.seat_type,
            price: ticket.price,
            status: ticket.status,
        });
    },

    // Cập nhật lịch trình
    update: async (id, ticket) => {
        return db('tickets')
        .where({ id })
        .update({
            seat_id: ticket.seat_id,
            schedule_id: ticket.schedule_id,
            departure_time: ticket.departure_time,
            arrival_time: ticket.arrival_time,
            seat_type: ticket.seat_type,
            price: ticket.price,
            status: ticket.status,
        });
    },

    // Xoá lịch trình
    delete: async (id) => {
        return db('tickets')
        .where({ id })
        .del();
    }
};

module.exports = Ticket;