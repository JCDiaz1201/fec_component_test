const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});