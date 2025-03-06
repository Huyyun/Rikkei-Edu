const db = require('../config/database');
const bookService = require('../services/book.services');

module.exports.getAllBooks = async function(req, res) {
    try {
        let books = await bookService.getAllBooks(req.query);
        res.json({
            message: "GET ALL BOOKS SUCCESSFULLY",
            books,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getOneBook = async function(req, res) {
    try {
        let books = await bookService.getOneBook(req);
        res.json({
            message: "GET ONE BOOK SUCCESSFULLY",
            books,
        });   
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getBookReviews = async function(req, res) {
    try {
        let reviews = await bookService.getBookReviews(req);
        res.json({
            message: "GET BOOK REVIEWS SUCCESSFULLY",
            reviews,
        });   
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.createBook = async function(req, res) {
    try {
        let newBook = await bookService.createBook(req);
        res.json({
            message: "CREATE ONE BOOK SUCCESSFULLY",
            newBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.createBookReview = async function(req, res) {
    try {
        let newReview = await bookService.createBookReview(req);
        res.json({
            message: "CREATE BOOK REVIEW SUCCESSFULLY",
            newReview,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.updateBook = async function(req, res) {
    try {
        let newBook = await bookService.updateBook(req);
        res.json({
            message: "UPDATE ONE BOOK SUCCESSFULLY",
            newBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.deleteBook = async function(req, res) {
    try {
        let deletedBook = await bookService.deleteBook(req);
        res.json({
            message: "DELETE ONE BOOK SUCCESSFULLY",
            deletedBook,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};