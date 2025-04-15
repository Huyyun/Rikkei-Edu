const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    // Nếu không phải admin thì chỉ được xem chính mình
    if (req.user.role !== "admin" && req.user.id !== userId) {
        return res.json({ 
            message: "Access denied" 
        });
    }

    try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.json({ 
                    message: "User not found" 
                });
            }
            res.json(user);
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) { 
        return res.json({ 
            message: "Missing fields" 
        });
    }
    
    try {
        const existing = await User.findByEmail(email);
        if (existing) {
            return res.json({ 
                message: "Email already in use" 
            });
        }
        const user = { name, email, password, role };
        await User.create(user);
        res.json({ 
            message: "User created" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    // Nếu không phải admin thì chỉ được cập nhật chính mình
    if (req.user.role !== "admin" && req.user.id !== userId) {
        return res.json({ 
            message: "Access denied" 
        });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.json({ 
                message: "User not found" 
            });
        }
        const { name, email, role } = req.body;
        await User.update(req.params.id, { name, email, role });
        res.json({ 
            message: "User updated" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.json({ 
                message: "User not found" 
            });
        }
        await User.delete(req.params.id);
        res.json({ 
            message: "User deleted" 
        });
    } catch (err) {
        res.json({ 
            message: err.message 
        });
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
