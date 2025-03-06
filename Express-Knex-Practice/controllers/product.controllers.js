const db = require('../config/database');
const productService = require('../services/product.services');

module.exports.getAllProducts = async function(req, res) {
    try {
        let products = await productService.getAllProducts();
        res.json({
            message: "GET ALL USERS SUCCESSFULLY",
            products,
        });
    } catch (error) {
        res.json({
            message: "Error occurred on server",
            error,
        });
    }
};

module.exports.getOneProduct = async function(req, res) {
    res.json({
        message: "GET ONE USER SUCCESSFULLY",
    });
};

module.exports.createProduct = async function(req, res) {
    res.json({
        message: "CREATE ONE USER SUCCESSFULLY",
    });
};

module.exports.updateProduct = async function(req, res) {
    res.json({
        message: "UPDATE ONE USER SUCCESSFULLY",
    });
};

module.exports.deleteProduct = async function(req, res) {
    res.json({
        message: "DELETE ONE USER SUCCESSFULLY",
    });
};