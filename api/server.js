// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Connect to routers
const authRouter = require('./auth-router');
const userRouter = require('./user-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', userRouter);
server.use('/api', authRouter);

// Test route
server.get('/', (req, res) => {
    res.send("<h1>Test works</h1>");
});

module.exports = server;
