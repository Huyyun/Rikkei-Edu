const authService = require("../services/auth.services");

exports.register = async (req, res) => {
    try {
        const token = await authService.register(req.body);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

exports.logout = async (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
};

exports.resetPassword = async (req, res) => {
    res.status(200).json({ message: "Password reset link sent" });
};

exports.uploadAvatar = async (req, res) => {
    res.status(200).json({ message: "Avatar uploaded successfully", file: req.file });
};