const sequelize = require("../middleware/databaseconnection");
const { DataTypes } = require("sequelize");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

async function syncCart() {
  try {
    await Cart.sync();
  } catch (error) {
    console.log(error);
  }
}

syncCart();

module.exports = Cart;
