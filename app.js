const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./Database/mongoose');
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});