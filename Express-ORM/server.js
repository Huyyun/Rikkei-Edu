const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const architectRoutes = require('./routes/architect.routes');

server.get("/", function (req, res) {
    res.json({
        message: "Hello world",
    });
});

// Sử dụng 1 số các application middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static("public"));
server.use("/architects", architectRoutes);

server.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});