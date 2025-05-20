const { PORT } = process.env;
const axios = require('axios');

exports.renderIndex = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/api/pokeneas/random-phrase`);
    const { image, phrase, containerId } = response.data;

    res.render('index', { image, phrase, containerId });
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.status(500).send('Internal server error (controller)');
  }
};