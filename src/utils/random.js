const pokemons = require('../data/pokeneas');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPokemon() {
  return getRandomItem(pokemons);
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