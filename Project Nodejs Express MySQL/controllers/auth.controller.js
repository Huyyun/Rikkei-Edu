const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.json({ 
      message: "Missing required fields" 
    });
  }

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.json({ 
        message: "Email already exists" 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = { name, email, password: hashedPassword, role };
    await User.create(newUser);

    res.json({ 
      message: "User registered successfully" 
    });
  } catch (err) {
    res.json({ 
      message: err.message 
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ 
      message: "Missing email or password" 
    });
  }

  try {
    const user = await User.findByEmail(email);
    // console.log("password in DB:", user.password); 
    if (!user) {
      return res.json({ 
        message: "Invalid email or password" 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ 
        message: "Invalid email or password" 
      });
    }
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.json({ 
      message: err.message 
    });
  }
};

module.exports = { register, login };
