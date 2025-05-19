const pokemons = require('../models/pokeneasData');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPokemon() {
  const data = getRandomItem(pokemons);
  const pokenea = new Pokenea(data);

  return pokenea.toJSON();
}

function getPokemonData() {
  const { id, name, height, abilities } = getRandomPokemon();
  return { id, name, height, abilities };
}

function getPokemonImageAndPhrase() {
  const { image, phrase } = getRandomPokemon();
  return { image, phrase };
}

module.exports = {
  getPokemonData,
  getPokemonImageAndPhrase
};