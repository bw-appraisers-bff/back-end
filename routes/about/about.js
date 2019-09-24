const express = require('express');
const router = express()

// const db = require('../../api/db-config');

router.get('/', (req, res) => {
    res.json({ test: "on the right track!"})
});

module.exports = router