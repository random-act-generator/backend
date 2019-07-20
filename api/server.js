// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

// Connect to routers
const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const contactsRouter = require('./contacts-router');
const servicesRouter = require('./services-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger('dev'));

server.use('/api', userRouter)
server.use('/api', authRouter);
server.use('/api', contactsRouter);
server.use('/api', servicesRouter);

/* Test route
server.get('/', (req, res) => {
    res.send("<h1>Test works</h1>");
});
*/
module.exports = server;
