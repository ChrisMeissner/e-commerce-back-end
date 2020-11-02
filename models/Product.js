// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // How do I validate the decimal??
      // validate: 
      // Is this correct?
      validate: {
        type: DataTypes.DECIMAL
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Set a default value of 10
      // Is this right?
      defaultValue: 10;
      // Validates that the value is numeric
      // Is this right?
      validate: {
        DataTypes.INTEGER
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      // Reference the category model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;