const sequelize = require("../middleware/databaseconnection");
const { DataTypes } = require("sequelize");

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    cart: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

async function syncCartItem() {
  try {
    await CartItem.sync();
  } catch (error) {
    console.log(error);
  }
}

syncCartItem();

module.exports = CartItem;
