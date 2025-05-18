const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const pokeneasRoutes = require('./routes/pokeneas');


app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use('/api/pokeneas', pokeneasRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the Pokeneas' app");
});

app.get('/pokewisdom', (req, res) => {
    res.redirect('/phraseImage.html');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
