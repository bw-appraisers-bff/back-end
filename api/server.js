const express = require('express');
const server = express();
const aboutRoute = require('../routes/about/about');
const favRoute = require('../routes/restricted/fav/fav');
const authRouter = require('../auth/authRouter');
const housesRoutes = require('../routes/restricted/houses/houses');

server.use(express.json());
server.use('/about', aboutRoute);
server.use('/fav', favRoute);
server.use('/houses', housesRoutes);
server.use('/auth', authRouter);

server.get('/', (req, res) => {
    res.json({ test: 'its up'})
});

module.exports = server;