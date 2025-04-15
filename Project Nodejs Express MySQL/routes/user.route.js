const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Chỉ admin được quyền xem tất cả user
router.get('/', authenticate, authorize(["admin"]), userController.getAllUsers);
// Admin hoặc chính user đó được xem thông tin cá nhân
router.get('/:id', authenticate, authorize(["admin", "user"]), userController.getUserById);
// Chỉ admin được thêm, sửa, xóa user, user có thể sử chính mình
router.post('/', authenticate, authorize(["admin"]), userController.createUser);
router.put('/:id', authenticate, authorize(["admin", "user"]), userController.updateUser);
router.delete('/:id', authenticate, authorize(["admin"]), userController.deleteUser);

module.exports = router;
