const Pokenea = require('../models/pokeneas');
const { getRandomPokenea, getRandomPokeneaImageAndPhrase } = require('../utils/random');


getRandom = (req, res) => {
  const pokenea = getRandomPokenea();
  return res.json(pokenea);
};

getImgPhrase = (req, res) => {
  const pokenea = getRandomPokeneaImageAndPhrase();
  return res.render('/phraseImage.html', pokenea);
};

module.exports = {
  getRandom,
  getImgPhrase
};


