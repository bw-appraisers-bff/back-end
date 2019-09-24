const axios = require('axios');
const express = require('express');
const router = express.Router();
const Houses = require('./housesModel');
const mw = require('./housesMiddleware');
const authMiddleware = require('../../../auth/authMiddleware');


router.get('/', authMiddleware, (req, res) => {
    Houses.find()
    .then(houses => {
        
        //move this to post
        res.status(200).json(houses)
//axios.get string interpolate link replace values(key,value) 
        axios.post(`https://appraisers-bff.herokuapp.com/?bedrooms=3&bathrooms=2&squarefeet=1800&zipcode=96337&yearbuilt=1979`)
        .then()
        .catch(err)
        //nested get ""
    }) 
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
        .then(house => res.status(201).json(newHouse))
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