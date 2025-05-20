// src/routes/pokeneas.js
const express = require('express');
const router = express.Router();
const pokeneaApiController = require('../controllers/pokeneaApiController');
const viewController = require('../controllers/viewController');


//Home page
router.get('/', (req, res) => {
    res.send("Welcome to the Pokeneas' app");
});

//Pokeneas routes
router.get('/api/pokeneas/random-info', pokeneaApiController.getRandom);
router.get('/api/pokeneas/random-phrase', pokeneaApiController.getImgPhrase);

router.get('/pokewisdom', viewController.renderIndex);

module.exports = router;
