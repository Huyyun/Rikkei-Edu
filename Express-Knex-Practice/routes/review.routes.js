const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/review.controllers");

// GET ALL
router.get("/", controller.getAllReviews);

// GET ONE
router.get("/:id", controller.getOneReview);

// CREATE REVIEW (POST)
router.post("/", controller.createReview);

// UPDATE REVIEW (PUT)
router.put("/:id", controller.updateReview);

// DELETE REVIEW (DELETE)
router.delete("/:id", controller.deleteReview);

module.exports = router;