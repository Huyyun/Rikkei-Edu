const db = require('../config/db');

const Booking = {
    // Tìm tất cả booking
    findAll: async () => {
        return db('bookings as b')
        .select( 
            'b.id', 
            'u.name', 
            't.title', 
            'b.booking_date', 
            'b.status' 
        )
        .join('users as u', 'u.id', 'b.user_id')
        .join('tours as t', 't.id', 'b.tour_id');
    },

    // Tìm booking theo id
    findById: async (id) => {
        return db('bookings')
        .where({ id })
        .first();
    },

    // Tìm booking theo user_id
    findByUserId: async (userId) => {
        return db('bookings')
        .where({ user_id: userId });
    },

    // Tìm booking theo tour_id
    findByTourId: async (tourId) => {
        return db('bookings')
        .where({ tour_id: tourId });
    },

    // Tạo booking mới
    create: async (booking) => {
        return db('bookings')
        .insert({
            user_id: booking.user_id,
            tour_id: booking.tour_id,
            status: booking.status || 'pending',
        });
    },

    // Cập nhật trạng thái booking
    update: async (id, status) => {
        return db('bookings')
        .where({ id })
        .update({ status });
    },

    // Xoá booking
    delete: async (id) => {
        return db('bookings')
        .where({ id })
        .del();
    }
};

module.exports = Booking;
