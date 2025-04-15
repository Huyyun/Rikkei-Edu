const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller');
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// Mọi user và admin đều có thể xem danh sách tour và chi tiết tt 1 tour
router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
// Chỉ admin mới có quyền tạo, sửa, xoá tour
router.post('/', authenticate, authorize(["admin"]), tourController.createTour);
router.put('/:id', authenticate, authorize(["admin"]), tourController.updateTour);
router.delete('/:id', authenticate, authorize(["admin"]), tourController.deleteTour);

module.exports = router;
