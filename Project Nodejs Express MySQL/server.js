const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
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
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const tourRoutes = require('./routes/tour.route');
const bookingRoutes = require('./routes/booking.route');

// Swagger
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
server.use('/api/auth', authRoutes);
server.use('/api/users', userRoutes);
server.use('/api/tours', tourRoutes);
server.use('/api/bookings', bookingRoutes);

server.get("/", (req, res) => {
    res.json({
      message: "Hello world !!!!",
    });
});
  
server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
