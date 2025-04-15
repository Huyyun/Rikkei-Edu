const jwt = require("jsonwebtoken");

exports.validateBody = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Missing fields" });
    }
    next();
};

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        req.user = jwt.verify(token, "secret");
        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
};