const sequelize = require("../middleware/databaseconnection");
const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const password = this.getDataValue("password");
        return password;
      },
      set(value) {
        const hash = bcrypt.hashSync(value, 10);
        this.setDataValue("password", hash);
      },
    },
    cart: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

async function syncUser() {
  try {
    await User.sync();
  } catch (error) {
    console.log(error);
  }
}

syncUser();

module.exports = User;
