const express = require('express');
const router = express.Router();
const Fav = require('./favModel');
const mw = require('./favMiddleware');
const authMiddleware = require('../../../auth/authMiddleware');


router.get('/', authMiddleware, (req, res) => {
    const { username } = req.body

    Fav.findBy({ username })
    .then(fav => res.status(200).json(fav))
    .catch(err => res.status(400).json({ err: err.message }))
});

router.get('/:id', authMiddleware, mw.validateFavId, (req, res) => {
    const { id } = req.params

    Fav.findById(id)
    .then(favs => res.status(200).json(favs))
    .catch(err => res.status(400).json({ err: err.message }))
});

router.post('/', authMiddleware, mw.validateFavObj, (req, res) => {
    const newFav = req.body;

    Fav.add(newFav)
        .then(fav => res.status(201).json(fav))
        .catch(err => res.status(400).json({ err: err.message }))
});

router.put('/:id', authMiddleware, mw.validateFavId, mw.validateFavObj, (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Fav.update(id, changes)
        .then(fav => res.status(200).json(fav))
        .catch(err => res.status(400).json({ err: err.message }))
});

router.delete('/:id', authMiddleware, mw.validateFavId, (req, res) => {
    const { id } = req.params;

    Fav.remove(id)
        .then(fav => res.status(200).json(fav))
        .catch(err => res.status(400).json({ err: err.message }))
});

module.exports = router;