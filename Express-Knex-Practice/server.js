const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const productRoutes = require('./routes/product.routes');
const bookRoutes = require('./routes/book.routes');
const categoryRoutes = require('./routes/category.routes');
const reviewRoutes = require('./routes/review.routes');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan('dev'));

// server.use("/products", productRoutes);
server.use("/api/v1/books", bookRoutes);
server.use("/api/v1/categories", categoryRoutes);
server.use("/api/v1/reviews", reviewRoutes);

server.get('/', function(req, res) {
    res.json({
        message: 'Hello, world',
    });
});

server.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});