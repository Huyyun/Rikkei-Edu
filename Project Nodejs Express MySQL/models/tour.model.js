const db = require('../config/db');

const Tour = {
    // Lấy tất cả tour
    findAll: async () => {
        return db('tours')
        .select();
    },

    // Lấy tour theo ID
    findById: async (id) => {
        return db('tours')
        .where({ id })
        .first();
    },

    // Tạo tour mới
    create: async (tour) => {
        return db('tours')
        .insert({
            title: tour.title,
            description: tour.description,
            price: tour.price,
            location: tour.location,
            start_date: tour.start_date,
            end_date: tour.end_date,
        });
    },

    // Cập nhật tour
    update: async (id, tour) => {
        return db('tours')
        .where({ id })
        .update({
            title: tour.title,
            description: tour.description,
            price: tour.price,
            location: tour.location,
            start_date: tour.start_date,
            end_date: tour.end_date,
        });
    },

    // Xoá tour
    delete: async (id) => {
        return db('tours')
        .where({ id })
        .del();
    }
};

module.exports = Tour;
