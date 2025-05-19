// src/routes/pokeneas.js
const express = require('express');
const router = express.Router();
const { getRandom, getImgPhrase } = require('../controllers/pokeneasController');


//Home page
router.get('/', (req, res) => {
    res.send("Welcome to the Pokeneas' app");
});

//Pokeneas routes
router.get('/pokeneas/randomInfo', getRandom);
router.get('/pokeneas/randomPhrase', getImgPhrase);

module.exports = router;
