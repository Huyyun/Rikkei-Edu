const db = require('../config/db');

const Seat = {
    // Tìm tất cả chỗ ngồi
    findAll: async () => {
        return db('seats')
        .select();
    },

    // Tìm chỗ ngồi theo ID
    findById: async (id) => {
        return db('seats')
        .where({ id })
        .first();
    },

    // Tìm chỗ ngồi theo số ghế
    findBySeatNumber: (seat_number) => {
        return db("seats")
        .where({ seat_number })
        .first();
    },


    // Tạo chỗ ngồi mới
    create: async (seat) => {
        return db('seats')
        .insert({
            bus_id: seat.bus_id,
            seat_number: seat.seat_number,
            seat_type: seat.seat_type,
            status: seat.status,
            price_for_type_seat: seat.price_for_type_seat,
        });
    },

    // Cập nhật chỗ ngồi
    update: async (id, seat) => {
        return db('seats')
        .where({ id })
        .update({
            bus_id: seat.bus_id,
            seat_number: seat.seat_number,
            seat_type: seat.seat_type,
            status: seat.status,
            price_for_type_seat: seat.price_for_type_seat,
        });
    },

    // Xoá chỗ ngồi
    delete: async (id) => {
        return db('seats')
        .where({ id })
        .del();
    }
};

module.exports = Seat;