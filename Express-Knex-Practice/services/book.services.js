const db = require('../config/database');

module.exports.getAllBooks = async function () {
    try {
        let result = await db("books"); 
        return result;
    } catch (error) {
        error;
    }
};

module.exports.getOneBook = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("books")
            .where("bookId", id);
        return result;
    } catch (error) {
        error;
    }
};

module.exports.getBookReviews = async function (req) {
    try {
      let id = req.params.id;
      let reviews = await db("reviews")
        .where("bookId", id);
      return reviews;
    } catch (error) {
      error;
    }
};

module.exports.createBook = async function (req) {
    try {
        let { bookId, title, authorId, categoryId, price, rate } = req.body;
        let result = await db("books")
            .insert({
                bookId: bookId,
                title: title,
                authorId: authorId,
                categoryId: categoryId,
                price: price,
                rate: rate,
            });
    } catch (error) {
        error;
    }
};

module.exports.createBookReview = async function (req) {
    try {
      let { id } = req.params;
      let { reviewId, content } = req.body;
      let result = await db("reviews")
        .insert({ 
            reviewId: reviewId,
            bookId: id, 
            content: content,
        });
    } catch (error) {
      error;
    }
};

module.exports.updateBook = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("books")
            .where("bookId", id)
            .update(req.body);
    } catch (error) {
        error;
    }
};

module.exports.deleteBook = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("books")
            .where("bookId", id)
            .del();
    } catch (error) {
        error;
    }
};