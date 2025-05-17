const pokeneas = require('../data/pokeneas');
const os = require('os');

exports.getRandom = (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length);
  const { id, name, height, abilities } = pokeneas[number];

  res.json({ id, name, height, abilities, containerId: os.hostname() });
};