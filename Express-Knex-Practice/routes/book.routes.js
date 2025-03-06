const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/book.controllers");
const { handleQuery } = require('../middlewares/book.middlewares');

// GET ALL
router.get("/", handleQuery ,controller.getAllBooks);

// GET ONE
router.get("/:id", controller.getOneBook);

// GET BOOK REVIEWS
router.get("/:id/reviews", controller.getBookReviews);

// CREATE BOOK (POST)
router.post("/", controller.createBook);

// CREATE BOOK REVIEWS
router.post("/:id/reviews", controller.createBookReview);

// UPDATE BOOK (PUT)
router.put("/:id", controller.updateBook);

// DELETE BOOK (DELETE)
router.delete("/:id", controller.deleteBook);

module.exports = router;