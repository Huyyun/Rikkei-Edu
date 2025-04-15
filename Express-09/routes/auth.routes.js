const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const { validateBody, authenticate } = require("../middlewares/auth.middlewares");
const multer = require("multer");

const upload = multer({ dest: "uploads/avatars/" });

router.post("/register", validateBody, authController.register);
router.post("/login", validateBody, authController.login);
router.post("/logout", authenticate, authController.logout);
router.post("/reset-password", authController.resetPassword);
router.post("/users/:id/avatar", authenticate, upload.single("avatar"), authController.uploadAvatar);

module.exports = router;