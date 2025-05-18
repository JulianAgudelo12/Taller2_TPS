// src/routes/pokeneas.js
const express = require('express');
const { getRandom, getImgPhrase } = require('../controllers/pokeneasController');
const router = express.Router();

router.get('/random-info', getRandom);
router.get('/random-phrase', getImgPhrase);

module.exports = router;
