// Create Express

const express = require('express');
const app = express();
// Create Path

const path = require('path');

// Set static folder
app.use(express.static(path.join(__dirname, 'Views')));

// ROUTES





// Create the PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // Create Seqelize
// const Sequelize = require('sequelize');
// const sqlConnection = new Sequelize('atomic_schema','root','password', {
//     dialect: 'sqlite',
//     storage: '/Database/database.sqlite'
// })

// let User = connection.define('user', {
//     first_name: Sequelize.STRING,
//     last_name: Sequelize.STRING,
//     email: Sequelize.STRING,
// })

// connection.sync();
