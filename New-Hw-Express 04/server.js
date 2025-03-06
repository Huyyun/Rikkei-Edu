const express = require('express');
const  bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();
// const userRoutes = require('./routes/users.routes');
// const albumsRoutes = require('./routes/albums.routes');
// const photosRoutes  = require('./routes/photos.routes');
// const nestedRoutes = require('./routes/nested.routes');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static("public"));

// server.use("/api/v1/users", userRoutes);
// server.use("/api/v1/albums", albumsRoutes);
// server.use("/api/v1/photos", photosRoutes);
// server.use("/api/v1", nestedRoutes);

server.get("/", function (req, res) {
   res.json({
       message: "Hello world",
   });
});

server.listen(3000, function () {
   console.log("Server is running at http://localhost:3000");
});