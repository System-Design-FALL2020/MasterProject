const express = require('express');
const { restart } = require('nodemon');
const { dirname } = require('path');
const app = express();
// Create Path

const path = require('path');

// Set static folder
// app.use(express.static(path.join(__dirname, 'Views')));

app.use(express.static(path.join(__dirname, 'public')));



// ROUTES





// Create the PORT

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));