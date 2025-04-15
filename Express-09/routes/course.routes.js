const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controllers');
const authenticate = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkrole');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', authenticate, checkRole(['admin', 'instructor']), courseController.createCourse);
router.put('/:id', authenticate, checkRole(['admin', 'instructor']), courseController.updateCourse);
router.delete('/:id', authenticate, checkRole(['admin']), courseController.deleteCourse);

module.exports = router;
