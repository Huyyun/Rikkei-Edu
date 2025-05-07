const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));

// Routes
const seatRoutes = require('./routes/seat.route');
const scheduleRoutes = require('./routes/schedule.route');
const ticketRoutes = require('./routes/ticket.route');

// API Routes
server.use('/api/seats', seatRoutes);
server.use('/api/schedules', scheduleRoutes);
server.use('/api/tickets', ticketRoutes);

server.get("/", (req, res) => {
    res.json({
      message: "Hello world !!!!",
    });
});
  
server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
