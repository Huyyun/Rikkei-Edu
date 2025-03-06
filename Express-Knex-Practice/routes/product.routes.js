const express = require('express');
const router = express.Router();
const db = require("../config/database");
const controller = require("../controllers/product.controllers");

// GET ALL
router.get("/", controller.getAllProducts);

// GET ONE
router.get("/:id", controller.getOneProduct);

// CREATE USER (POST)
router.post("/", controller.createProduct);

// UPDATE USER (PUT)
router.put("/:id", controller.updateProduct);

// DELETE USER (DELETE)
router.delete("/:id", controller.deleteProduct);

module.exports = router;
