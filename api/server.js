const express = require('express');
const server = express();
const cors = require('cors')
const axios = require('axios')
const aboutRoute = require('../routes/about/about');
const favRoute = require('../routes/restricted/fav/fav');
const authRouter = require('../auth/authRouter');
const housesRoutes = require('../routes/restricted/houses/houses');

server.use(express.json());
server.use(cors());
server.use('/about', aboutRoute);
server.use('/fav', favRoute);
server.use('/houses', housesRoutes);
server.use('/auth', authRouter);

server.get('/', (req, res) => {
    // let's wake up the DS model first
    axios.get(`https://appraisers-bff.herokuapp.com/?&yearbuilt=1983&bedrooms=1&bathrooms=2&squarefeet=1800`)
        .then(price => res.json({ apiTest: 'its up', dsTest: 'its up' }))
        .catch(err => res.status(500).json({ message: 'error waking up the data science model' }))
});

module.exports = server;