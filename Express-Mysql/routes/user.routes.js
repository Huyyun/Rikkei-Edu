const express = require('express');
const router = express.Router();
const db = require('../database/database');

// GET ONE
router.get('/:id', function (req, res) {
    let id = req.params.id;
    db.execute("SELECT * FROM user WHERE id = ?", [id])
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
});
// GET ALL
router.get('/', function (req, res) {
//     const mysql = require('mysql2/promise');
//     const connect = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '12345678',
//         database: 'mysql2_demo',
//     });

//     console.log(connect);

//     connect
//         .then((result) => {
//             let users = result.query('SELECT * FROM User');
//             return users;
//         })
//         .then((users) => {
//             res.json(users[0]);
//         })
//         .catch((err) => {
//             console.log('Error connecting to the database:', err);
//             return;
//         });


    // Không cần
    // connection.connect(function (err) {
    //     if (err) {
    //         console.log(err);
    //         res.json(err);
    //     }
    //     console.log("Kết nối thành công");
    // });
 
    // // Truy vấn dữ liệu sử dụng các câu lệnh SQL thuần
    // let data = connection
    // .query("SELECT * FROM user") // ---> Promise
    // .then(function() {
    //     console.log("Promise resolve", data);
    // }) // kết quả trả về của promise . query
    // .catch(function() {
    //     console.log(err);
    // }); 
    // console.log(data);  
    // connection.end();

    // res.json({
    //     message: "Get all successfully",
    // });

    let result = db
        .query("SELECT * FROM user")
        .then(function (data) {
            res.json(data[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
    console.log(result);
});
// POST
router.post('/', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    db.execute("INSERT INTO user (email, username, password) VALUES (?, ?, ?)", [email, null, password])
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
// PUT
router.put('/:id', function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    db.execute("UPDATE user SET username = ? WHERE id = ?", [username, id])
        .then(function (data) {
            res.json({
                message: "Update successfully",
            });  
        })
        .catch(function (err) {
            console.log(err);
        }); 
});
// DELETE
router.delete('/:id', function(req, res) {
    let id = req.params.id;
    db.execute("DELETE FROM user WHERE id = ?", [id])
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