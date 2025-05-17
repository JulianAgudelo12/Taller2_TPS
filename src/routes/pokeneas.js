// src/routes/pokeneas.js
const express = require('express');
const { getRandom } = require('../controllers/pokeneasController');
const router = express.Router();

router.get('/random', getRandom);

module.exports = router;
