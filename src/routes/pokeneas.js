// src/routes/pokeneas.js
const express = require('express');
const router = express.Router();
const pokeneaApiController = require('../controllers/pokeneaApiController');

//Home page
router.get('/', (req, res) => {
    res.send("Welcome to the Pokeneas' app");
});

//Pokeneas routes
router.get('/pokeneas-json', pokeneaApiController.getRandom);
router.get('/pokeneas-phrase', pokeneaApiController.getImgPhrase);

module.exports = router;
