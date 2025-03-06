const db = require('../config/database');

module.exports.getAllCategories = async function () {
    try {
        let result = await db("categories"); 
        return result;
    } catch (error) {
        error;
    }
};

module.exports.getOneCategory = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("categories")
            .where("categoryId", id);
        return result;
    } catch (error) {
        error;
    }
};

module.exports.getCategoryBooks = async function (req) {
    try {
      let id = req.params.id;
      let books = await db("books")
        .where("categoryId", id);
      return books;
    } catch (error) {
      error;
    }
};

module.exports.createCategory = async function (req) {
    try {
        let { categoryId, categoryName } = req.body;
        let result = await db("categories")
            .insert({
                categoryId: categoryId,
                categoryName: categoryName,
            });
    } catch (error) {
        error;
    }
};

module.exports.updateCategory = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("categories")
            .where("categoryId", id)
            .update(req.body);
    } catch (error) {
        error;
    }
};

module.exports.deleteCategory = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("categories")
            .where("categoryId", id)
            .del();
    } catch (error) {
        error;
    }
};