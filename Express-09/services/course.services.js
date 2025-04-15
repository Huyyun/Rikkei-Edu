const { Course } = require('../models');

exports.getAllCourses = async (filters) => {
    const { level, category, priceMin, priceMax, sort, order, page, limit } = filters;

    const where = {};
    if (level) where.level = level;
    if (category) where.category = category;
    if (priceMin && priceMax) where.price = { $between: [priceMin, priceMax] };

    const sortBy = sort ? [[sort, order || 'asc']] : [];

    const options = {
        where,
        order: sortBy,
        limit: parseInt(limit) || 10,
        offset: ((parseInt(page) || 1) - 1) * (parseInt(limit) || 10)
    };

    return Course.findAll(options);
};

exports.getCourseById = async (id) => {
    return Course.findByPk(id);
};

exports.createCourse = async (data, instructorId) => {
    return Course.create({ ...data, instructorId });
};

exports.updateCourse = async (id, data, user) => {
    const course = await Course.findByPk(id);
    if (!course) throw new Error('Course not found');

    if (user.role !== 'admin' && user.id !== course.instructorId) {
        throw new Error('Unauthorized');
    }

    return course.update(data);
};

exports.deleteCourse = async (id) => {
    const course = await Course.findByPk(id);
    if (!course) throw new Error('Course not found');

    return course.destroy();
};
