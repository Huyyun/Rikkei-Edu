const db = require('../config/database');

module.exports.getAllReviews = async function () {
    try {
        let result = await db("reviews"); 
        return result;
    } catch (error) {
        error;
    }
};

module.exports.getOneReview = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("reviews")
            .where("reviewId", id);
        return result;
    } catch (error) {
        error;
    }
};

module.exports.createReview = async function (req) {
    try {
        let { reviewId, bookId, content } = req.body;
        let result = await db("reviews")
            .insert({
                reviewId: reviewId,
                bookId: bookId,
                content: content,
            });
    } catch (error) {
        error;
    }
};

module.exports.updateReview = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("reviews")
            .where("reviewId", id)
            .update(req.body);
    } catch (error) {
        error;
    }
};

module.exports.deleteReview = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("reviews")
            .where("reviewId", id)
            .del();
    } catch (error) {
        error;
    }
};