const express = require('express');
const morgan = require('morgan');       // Logging middleware
const cors = require('cors');           // CORS middleware

const app = express();

app.use(cors());
app.use(morgan('tiny'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

