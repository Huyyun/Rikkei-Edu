const db = require('../config/database');
const categoryService = require('../services/category.services');

module.exports.getAllCategories = async function(req, res) {
    try {
        let categories = await categoryService.getAllCategories(req.query);
        res.json({
            message: "GET ALL CATEGORIES SUCCESSFULLY",
            categories,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getOneCategory = async function(req, res) {
    try {
        let categories = await categoryService.getOneCategory(req);
        res.json({
            message: "GET ONE CATEGORY SUCCESSFULLY",
            categories,
        });   
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getCategoryBooks = async function(req, res) {
    try {
        let books = await categoryService.getCategoryBooks(req);
        res.json({
            message: "GET BOOK REVIEWS SUCCESSFULLY",
            books,
        });   
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.createCategory = async function(req, res) {
    try {
        let newCategory = await categoryService.createCategory(req);
        res.json({
            message: "CREATE ONE BOOK SUCCESSFULLY",
            newCategory,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.updateCategory = async function(req, res) {
    try {
        let newCategory = await categoryService.updateCategory(req);
        res.json({
            message: "UPDATE ONE BOOK SUCCESSFULLY",
            newCategory,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.deleteCategory = async function(req, res) {
    try {
        let deletedCategory = await categoryService.deleteCategory(req);
        res.json({
            message: "DELETE ONE BOOK SUCCESSFULLY",
            deletedCategory,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};