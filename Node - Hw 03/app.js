// Import các module cần thiết
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

// Khởi tạo ứng dụng Express
const app = express();
const PORT = 3000;

// Middleware để parse JSON body
app.use(bodyParser.json());

// Load danh sách users từ file JSON
const usersFile = "starter/dev-data/users.json";
let users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

// Exercise 01: Web Server cơ bản
app.get("/", (req, res) => {
    res.send("Hello world");
});

// Exercise 02: Routing cơ bản
app.get("/overview", (req, res) => {
    res.send("<h1>This is overview page</h1>");
});

app.get("/product", (req, res) => {
    res.send("<h1>This is product page</h1>");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

// Exercise 04: Middleware kiểm tra user tồn tại
const checkExist = (req, res, next) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    req.user = user; // Lưu user vào request để dùng sau
    next();
};

// Exercise 03: Xây dựng API

// Lấy danh sách Users
app.get("/api/v1/users", (req, res) => {
    res.status(200).json(users);
});

// Lấy User theo ID
app.get("/api/v1/users/:id", checkExist, (req, res) => {
    res.status(200).json(req.user);
});

// Thêm mới User
app.post("/api/v1/users", (req, res) => {
    const { id, name, email } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "User already exists" });
    }
    users.push({ id, name, email });
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.status(201).json({ message: "Create successfully" });
});

// Cập nhật User
app.put("/api/v1/users/:id", checkExist, (req, res) => {
    const { name, email } = req.body;
    req.user.name = name || req.user.name;
    req.user.email = email || req.user.email;
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.status(200).json({ message: "Update successfully" });
});

// Xóa User
app.delete("/api/v1/users/:id", checkExist, (req, res) => {
    users = users.filter(u => u.id !== req.user.id);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.status(200).json({ message: "Delete successfully" });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
