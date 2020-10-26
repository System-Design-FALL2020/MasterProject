const express = require('express');
const router = require('./routes/routes')
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();

// Declaring static directories for easier access when referring to the files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

// Using express ejs layouts makes the view engine look to the layouts folder first
app.use(expressEjsLayouts)
app.set('view engine', 'ejs')

// Put the routes in a separate folder for readability
app.use(router);

// At the moment there is no dotenv file so it will run on 8080 but IF you have one it will run on what you designate
const PORT = process.env.PORT || 8080;

// Made it so this is a clickable link when ran. Makes it so much more convenient
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));