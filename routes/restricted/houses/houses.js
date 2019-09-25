const axios = require('axios');
const express = require('express');
const router = express.Router();
const Houses = require('./housesModel');
const Prices = require('./pricesModel')
const mw = require('./housesMiddleware');
const authMiddleware = require('../../../auth/authMiddleware');


router.get('/', authMiddleware, (req, res) => {
    Houses.find()
    .then(houses => res.status(200).json(houses)) 
    .catch(err => res.status(400).json({ err: err.message }))
});

router.get('/:id', authMiddleware, mw.validateHouseId, (req, res) => {
    const { id } = req.params

    Houses.findById(id)
    .then(houses => res.status(200).json(houses))
    .catch(err => res.status(400).json({ err: err.message }))
});

router.post('/', authMiddleware, mw.validateHouseObj, (req, res) => {
    const newHouse = req.body;

    Houses.add(newHouse)
        .then(house => {
            axios.get(`https://appraisers-bff.herokuapp.com/?bedrooms=${house.bedrooms}&bathrooms=${house.bathrooms}&squarefeet=${house.squareFootage}&yearbuilt=${house.yearBuilt}&zipcode=11111`)
                .then(price => {
                    Prices.add(house.id, price.data)
                        .then(() => {
                            Houses.findByIdWithPrice(house.id)
                                .then(hse => res.status(200).json(hse))
                                .catch(err => res.status(500).json({ message: 'error retrieving house results with price' }))
                        })
                        .catch(err => res.status(500).json({ message: 'error inputting price' }))
                })
                .catch(err => res.status(500).json({ message: 'error calculating price' }))
        })
        .catch(err => res.status(400).json({ err: err.message }))
});

router.put('/:id', authMiddleware, mw.validateHouseId, mw.validateHouseObj, (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Houses.update(id, changes)
        .then(house => res.status(200).json(house))
        .catch(err => res.status(400).json({ err: err.message }))
});

router.delete('/:id', authMiddleware, mw.validateHouseId, (req, res) => {
    const { id } = req.params;

    Houses.remove(id)
        .then(house => res.status(200).json(house))
        .catch(err => res.status(400).json({ err: err.message }))
});

module.exports = router;