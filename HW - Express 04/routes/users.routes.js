const express = require('express');
const router = express.Router();
const db = require('../database/database');

// 1. GET ALL - Lấy danh sách users
router.get('/', function (req, res) {
    db.execute("SELECT * FROM users")
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 2. GET ONE - Lấy user theo ID
router.get('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("SELECT * FROM users WHERE id = ?", [id])
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});

// 3. POST - Tạo user mới
router.post('/', function (req, res) {
    let { id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, company_catchphrase, company_bs, interests } = req.body;

    db.execute("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",  
        [id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, company_catchphrase, company_bs, JSON.stringify(interests)])
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

// 4. PUT - Cập nhật user theo ID
router.put('/:id', function (req, res) {
    let { name, email, phone } = req.body;
    db.execute("UPDATE users SET name=?, email=?, phone=? WHERE id=?", [name, email, phone, req.params.id])
        .then(function (data) {
            res.json({
                message: "Update successfully",
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});

// 5. DELETE - Xóa user theo ID
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("DELETE FROM users WHERE id = ?", [id])
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