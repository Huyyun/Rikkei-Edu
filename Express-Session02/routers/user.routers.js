const express = require('express');
const router = express.Router();

// endpoint dành cho users
// GET ONE
router.get("/:id", function(req, res) {
    res.json({
        message: "GET ONE USER SUCCESSFULLY",
    });
});

// GET ALL
router.get("/", function(req, res) {
    res.json({
        message: "GET ALL USERS SUCCESSFULLY",
    });
});

// CREATE USER (POST)
router.post("/", function(req, res) {
    res.json({
        message: "CREATE ONE USER SUCCESSFULLY",
    });
});

// UPDATE USER (PUT)
router.put("/:id", function(req, res) {
    res.json({
        message: "UPDATE ONE USER SUCCESSFULLY",
    });
});

// DELETE USER (DELETE)
router.delete("/:id", function(req, res) {
    res.json({
        message: "DELETE ONE USER SUCCESSFULLY",
    });
});

module.exports = router;
