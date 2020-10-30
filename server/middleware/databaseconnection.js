const { Sequelize } = require("sequelize");
// Create an instance of sequelize connecting to our SQLITE3 Database
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../db.sqlite",
  logging: false,
});

// Export the instance of the db connection.
module.exports = sequelize;
