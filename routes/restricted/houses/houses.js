const express = require('express');
const router = express.Router();
const Houses = require('./housesModel');
//const mw = require('./housesMiddleware');

router.get('/', (req, res) => {
    Houses.find()
    .then(houses => res.status(200).json(houses))
    .catch(err => res.status(400).json({ err: err.message }))
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    Houses.findById(id)
    .then(houses => res.status(200).json(houses))
    .catch(err => res.status(400).json({ err: err.message }))
});

router.post('/', (req, res) => {
    const newHouse = req.body;

    Houses.add(newHouse)
        .then(house => res.status(201).json(newHouse))
        .catch(err => res.status(400).json({ err: err.message }))
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Houses.update(id, changes)
        .then(house => res.status(200).json(house))
        .catch(err => res.status(400).json({ err: err.message }))
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Houses.remove(id)
        .then(house => res.status(200).json(house))
        .catch(err => res.status(400).json({ err: err.message }))
});

module.exports = router;