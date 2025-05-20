const Pokenea = require('../models/Pokeneas');
const { getRandomPokenea, getRandomPokeneaImageAndPhrase } = require('../utils/random');


getRandom = (req, res) => {
  try {
    const pokenea = getRandomPokenea();
    return res.json(pokenea);
  } catch (error) {
    res.status(500).json({error: 'Internal Server Error'})
  }
};

getImgPhrase = (req, res) => {
  try {
    const pokenea = getRandomPokeneaImageAndPhrase();
    return res.json(pokenea);
  } catch (error) {
    res.status(500).json({error: 'Internal Server Error'})
  }
};

module.exports = {
  getRandom,
  getImgPhrase
};


