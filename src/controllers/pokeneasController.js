const Pokenea = require('../models/pokeneas');
const { getPokemonData, getPokemonImageAndPhrase } = require('../utils/random');
const os = require('os');

exports.getRandom = (req, res) => {
  const pokenea = getPokemonData();
  return res.json(pokenea);
};

exports.getImgPhrase = (req, res) => {
  const pokenea = getPokemonImageAndPhrase();
  return res.json(pokenea);
};