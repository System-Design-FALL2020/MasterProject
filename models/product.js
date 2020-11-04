const sequelize = require("../middleware/databaseconnection");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  { timestamps: false }
);

async function syncProduct() {
  try {
    await Product.sync();
  } catch (error) {
    console.log(error);
  }
}

syncProduct();

module.exports = Product;
