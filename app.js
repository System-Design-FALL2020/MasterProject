const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const sequelize = require("./middleware/databaseconnection");
const expressEjsLayouts = require("express-ejs-layouts");
const passport = require("./middleware/passportconfig");
const session = require("express-session");
const app = express();

async function establishConnnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connnect to the database", error);
  }
}

establishConnnection();
// Declaring static directories for easier access when referring to the files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Using express ejs layouts makes the view engine look to the layouts folder first
app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.use(
  session({
    secret: process.env.SECRET_CODE || "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Put the routes in a separate folder for readability
app.use(router);

// At the moment there is no dotenv file so it will run on 8080 but IF you have one it will run on what you designate
const PORT = process.env.PORT || 8080;

// Made it so this is a clickable link when ran. Makes it so much more convenient
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
