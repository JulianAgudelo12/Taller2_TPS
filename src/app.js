require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const { PORT } = process.env;
const pokeneasRoutes = require('./routes/pokeneas');


app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(pokeneasRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
