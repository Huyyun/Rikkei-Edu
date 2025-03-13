const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const lodash = require('lodash');

const jobRoutes = require('./routes/job.routes');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan('dev'));

server.use("/api/v1/jobs", jobRoutes);

server.get('/', function(req, res) {
    res.json({
        message: 'Hello, world',
    });
});

server.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
