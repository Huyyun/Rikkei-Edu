// B1: Require 
 const express = require('express');
 const  bodyParser = require('body-parser');
 const morgan = require('morgan');
 const server = express();
 const userRoutes = require('./routes/user.routes');

 // B2: Sử dụng các application middleware
 server.use(bodyParser.json());
 server.use(bodyParser.urlencoded({ extended: true }));
 server.use(morgan("dev"));
 server.use(express.static("public"));
 server.use("/user", userRoutes);

 // B3: Thiết lập các endpoint
 server.get("/", function (req, res) {
    res.json({
        message: "Hello world",
    });
 });

 // B4: Server lắng nghe tại port (3000)
 server.listen(3000, function () {
    console.log("Server is running at http://localhost:3000");
 });