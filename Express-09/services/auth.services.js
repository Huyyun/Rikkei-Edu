const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = [];

exports.register = async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    return jwt.sign({ email }, "secret", { expiresIn: "1h" });
};

exports.login = async ({ email, password }) => {
    const user = users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials");
    }
    return jwt.sign({ email }, "secret", { expiresIn: "1h" });
};