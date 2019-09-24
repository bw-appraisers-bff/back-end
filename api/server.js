const express = require('express');
const server = express();
const aboutRoute = require('../routes/about/about');
// const favRoute = require('../routes/restricted/fav/fav');
// const housesRoutes = require('../routes/restricted/houses/houses');

server.use(express.json());
server.use('/about/', aboutRoute);
// server.use(('/fav/', favRoute));
// server.use(('/houses/', housesRoutes));

server.get('/', (req, res) => {
    res.json({ test: 'its up'})
});

module.exports = server;