const express = require('express');
const router = express.Router();
const db = require('../database/database');

// 1. Lấy danh sách photos
router.get('/', function (req, res) {
    db.execute("SELECT * FROM photos")
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 2. Lấy photo theo ID
router.get('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("SELECT * FROM photos WHERE id = ?", [id])
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 3. Tạo photo mới
router.post('/', function (req, res) {
    let { id, album_id, title, url, thumbnail_url } = req.body;
    db.execute("INSERT INTO photos VALUES (?, ?, ?, ?, ?)", [id, album_id, title, url, thumbnail_url])
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

// 4. Cập nhật photo theo ID
router.put('/:id', function (req, res) {
    let { title, url, thumbnail_url } = req.body;
    db.execute("UPDATE photos SET title=?, url=?, thumbnail_url=? WHERE id=?", [title, url, thumbnail_url, req.params.id])
        .then(function (data) {
            res.json({
                message: "Update successfully",
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});

// 4. Xóa photo theo ID
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("DELETE FROM photos WHERE id = ?", [id])
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