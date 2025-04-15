const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    
    if (!token) {
        return res.json({ 
            message: 'Access denied, token missing' 
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.json({ 
            message: 'Invalid token' 
        });
    }

};

// Middleware phân quyền theo vai trò
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.json({ 
            message: "Forbidden: Access denied" 
        });
    }
    next();
  };
};

module.exports = { authenticate, authorize };
