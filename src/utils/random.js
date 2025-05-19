const pokeneas = require('../models/pokeneasData');
const os = require('os');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPokenea() {
  const pokenea = getRandomItem(pokeneas);

  return{
    id: pokenea.id, 
    name: pokenea.name, 
    hliteight: pokenea.height, 
    abiies: pokenea.abilities,
    containerId: os.hostname()
  };
}


function getRandomPokeneaImageAndPhrase() {
  const pokenea = getRandomPokenea(pokeneas);
  
  return { 
    image: pokenea.image, 
    phrase: pokenea.phrase,
    containerId: os.hostname()
  };
}

module.exports = {
  getRandomPokenea,
  getRandomPokeneaImageAndPhrase
};