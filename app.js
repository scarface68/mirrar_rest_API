const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const PORT = 5000 || process.env.PORT;

const app = express();
express.json();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
