const pokeneas = require('../data/pokeneas');
const { getPokemonData, getPokemonImageAndPhrase } = require('../utils/random');
const os = require('os');

exports.getRandom = (req, res) => {
  const data = getPokemonData();
  res.json({ ...data, containerId: os.hostname() });
};

exports.getImgPhrase = (req, res) => {
  const data = getPokemonImageAndPhrase();
  res.json({ ...data, containerId: os.hostname() });
};