const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET ALL
router.get("/", async function(req, res) {
    try {
        // let result = await db("architect").select("name as full_name", "birthday");
        // Select + where
        // let result = await db("architect")
            // .where("place", "ha noi");
            // .where("birthday", "<=", 1970);
        // Nhiều điều kiện AND, OR
        // andWhere, orWhere
        // .where("birthday", "<", 1970)
        // .andWhere("birthday", ">", 1952);
        
        // IN + BETWEEN
        // whereIn
        // .whereIn("place", ["tp hcm", "ha noi"]);
        // whereBetween
        // .whereBetween("birthday", [1952, 1970]);
        
        // LIKE
        // .where("name", "like", "le %");

        // ORDER BY
        // .whereBetween("birthday", [1952, 1970])
        // .orderBy("birthday", "asc");

        // AGGREGATE FUNCTION
        // MIN, MAX, AVG, COUNT, ROUND
        // .count("id as count");
        // .min("birthday as oldest");

        // GROUP BY + HAVING
        // .select("place")
        // .count("id as count")
        // .groupBy("place")
        // .having("count", ">=", 2);

        // LIMIT ... OFFSET
        // .select("*")
        // .limit(2)
        // .offset(2);

        // Truy vấn lồng (Subqueries)
        // Hiển thị tt kiến trúc sư chưa thiết kế bất kỳ công trình nào
        // Xây dựng subqueries
        // Lấy ra toàn bộ id kiến trúc sư trong bảng design
        // sub-query không được await để xử lý
        // let result = db("design").distinct("architect_id")
        // Xây dựng query chính
        // let info = await db("architect").whereNotIn("id", result);

        // JOIN 
        // Lấy ra thông tin về toàn bộ building và kiến trúc sư thiết kế building đó
        let result = await db("design")
        .join("building", "building.id", "design.building_id")
        .join("architect", "architect.id", "design.architect_id")
        .select(
            "building.id", 
            "building.name", 
            "architect.name as architect_name"
        );

        // Thứ tự câu lệnh SELECT trong Knex
        // SELECT [DISTINCT]
        // FROM
        // JOIN .. ON
        // WHERE
        // GROUP BY
        // HAVING
        // ORDER BY

        

        res.json({
            message: "GET ALL USERS SUCCESSFULLY",
            architects: result,
            // architects: info,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    };
});

// GET ONE
router.get("/:id", function(req, res) {
    let {id} = req.params;
    try {

    } catch (error) {

    };
    res.json({
        message: "GET ONE USER SUCCESSFULLY",
    });
});

// CREATE USER (POST)
router.post("/", async function(req, res) {
    let {name, birthday, sex, place, address} = req.body;
    try {
        let result = await db("architect").insert({
            name: name,
            birthday: birthday,
            sex: sex,
            place: place,
            address: address,
        });
        console.log(result);
        res.json({
            message: "CREATE ONE USER SUCCESSFULLY",
            createdId: id,
        });
        // Thêm mới nhiều bản ghi: .insert([{}])
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
});

// UPDATE USER (PUT)
router.put("/:id", async function(req, res) {
    let {id} = req.params;
    try {
        let result = await db("architect").where({id}).update(req.body);
        console.log(result);
        res.json({
            message: "UPDATE ONE USER SUCCESSFULLY",
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
    
});

// DELETE USER (DELETE)
router.delete("/:id", async function(req, res) {
    let {id} = req.params;
    try {
        let result = await db("architect").where({id}).del();
        console.log(result);
        res.json({
            message: "DELETE ONE USER SUCCESSFULLY",
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    };
});

module.exports = router;
