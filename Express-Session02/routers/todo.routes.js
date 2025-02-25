const express = require('express');
const router = express.Router();
const fs = require('fs');
const rootURL = __dirname + "/../data"

// endpoint dành cho users
// GET ONE
router.get("/:id", function(req, res) {
    res.json({
        message: "GET ONE USER SUCCESSFULLY",
    });
});

// GET ALL
router.get("/", function(req, res) {
    let todos = fs.readFileSync(rootURL + "/todos.json");
    todos = JSON.parse(todos);
    res.json(todos);
});

// CREATE USER (POST)
router.post("/", function(req, res) {
    // Trích xuất thông tin client gửi lên từ body
    let content = req.body.content;
    console.log(req.body);

    let todo = {
        id: Math.random(),
        content: content,
        status: false,
    };
    let todos = fs.readFileSync(rootURL + "/todos.json");
    todos = JSON.parse(todos);
    todos.push(todo);

    fs.writeFileSync(rootURL + "/todos.json", JSON.stringify(todos))
    // Tạo ra 1 đoois tượng dữ liệu todo mới và lưu trữ
    // đối tượng dữ liệu đó và trong CSDL
    res.json({
        message: "CREATE ONE USER SUCCESSFULLY",
        id: todo.id,
    });
});

// UPDATE USER (PUT)
router.put("/:id", function(req, res) {
    let id = req.params.id;
    let status = req.body.status;

    let todos = fs.readFileSync(rootURL + "/todos.json");
    todos = JSON.parse(todos);

    let updateIndex = todos.findIndex(function (e, i) {
        return e.id === +id;
    });

    todos[updateIndex].status = status;

    fs.writeFileSync(rootURL + "/todos.json", JSON.stringify(todos));

    res.json({
        message: "UPDATE ONE USER SUCCESSFULLY",
    });
});

// DELETE USER (DELETE)
router.delete("/:id", function(req, res) {
    let id = req.params.id;

    let todos = fs.readFileSync(rootURL + "/todos.json");
    todos = JSON.parse(todos);

    let deleteIndex = todos.findIndex(function (e, i) {
        return e.id === +id;
    });

    todos.splice(deleteIndex, 1);

    fs.writeFileSync(rootURL + "/todos.json", JSON.stringify(todos));

    res.json({
        message: "DELETE ONE USER SUCCESSFULLY",
    });
});

module.exports = router;
