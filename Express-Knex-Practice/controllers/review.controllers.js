const db = require('../config/database');
const reviewService = require('../services/review.services');

module.exports.getAllReviews = async function(req, res) {
    try {
        let books = await reviewService.getAllReviews(req.query);
        res.json({
            message: "GET ALL REVIEWS SUCCESSFULLY",
            books,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getOneReview = async function(req, res) {
    try {
        let books = await reviewService.getOneReview(req);
        res.json({
            message: "GET ONE REVIEW SUCCESSFULLY",
            books,
        });   
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.createReview = async function(req, res) {
    try {
        let newBook = await reviewService.createReview(req);
        res.json({
            message: "CREATE ONE REVIEW SUCCESSFULLY",
            newBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.updateReview = async function(req, res) {
    try {
        let newBook = await reviewService.updateReview(req);
        res.json({
            message: "UPDATE ONE REVIEW SUCCESSFULLY",
            newBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.deleteReview = async function(req, res) {
    try {
        let deletedBook = await reviewService.deleteReview(req);
        res.json({
            message: "DELETE ONE REVIEW SUCCESSFULLY",
            deletedBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};