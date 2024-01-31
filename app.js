const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
