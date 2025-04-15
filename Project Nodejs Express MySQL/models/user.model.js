const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    // Tìm tất cả user
    findAll: async () => {
        return db('users')
        .select();
    },

    // Tìm người dùng theo ID
    findById: async (id) => {
        return db('users')
        .where({ id })
        .first();
    },

    // Tìm người dùng theo email
    findByEmail: (email) => {
        return db("users")
        .where({ email })
        .first();
    },

    // Tạo người dùng mới
    create: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return db('users')
        .insert({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            role: user.role || 'user',
        });
    },

    // Cập nhật người dùng
    update: async (id, user) => {
        return db('users')
        .where({ id })
        .update({
            name: user.name,
            email: user.email,
            role: user.role,
        });
    },

    // Xoá người dùng
    delete: async (id) => {
        return db('users')
        .where({ id })
        .del();
    }
};

module.exports = User;
