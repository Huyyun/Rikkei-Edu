const express = require('express');
const router = express.Router();
const db = require('../database/database');

// 1. Lấy danh sách albums
router.get('/', function (req, res) {
    db.execute("SELECT * FROM albums")
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 2. Lấy album theo ID
router.get('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("SELECT * FROM albums WHERE id = ?", [id])
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 3. Tạo album mới
router.post('/', function (req, res) {
    let { id, user_id, title } = req.body;
    db.execute("INSERT INTO albums VALUES (?, ?, ?)", [id, user_id, title])
        .then(function (data) {
            res.json({
                message: "Post successfully",
                insertId: data[0].insertId
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});

// 4. Cập nhật album theo ID
router.put('/:id', function (req, res) {
    let { title } = req.body;
    db.execute("UPDATE albums SET title=? WHERE id=?", [title, req.params.id])
        .then(function (data) {
            res.json({
                message: "Update successfully",
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});

// 5. Xóa album theo ID
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("DELETE FROM albums WHERE id = ?", [id])
        .then(function (data) {
            res.json({
                message: "Delete successfully",
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});

module.exports = router;
