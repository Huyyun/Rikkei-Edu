const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/category.controllers");

// GET ALL
router.get("/", controller.getAllCategories);

// GET ONE
router.get("/:id", controller.getOneCategory);

// GET CATEGORY BOOK 
router.get("/:id/books", controller.getCategoryBooks);

// CREATE CATEGORY (POST)
router.post("/", controller.createCategory);

// UPDATE CATEGORY (PUT)
router.put("/:id", controller.updateCategory);

// DELETE CATEGORY (DELETE)
router.delete("/:id", controller.deleteCategory);

module.exports = router;