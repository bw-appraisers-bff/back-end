const express = require('express');

const db = require('../../../api/db-config');

server.get('/', (req, res) => {
    res.json({ test: "on the right track!"})
});

module.exports = router;