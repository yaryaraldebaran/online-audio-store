const { sequelize, Sequelize } = require("../koneksiSequelize");

module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('order', {
    orderNumber: {
      type: DataTypes.INTEGER
    },
    productID: {
      type: DataTypes.INTEGER
    },
    quantityOrdered: {
      type: DataTypes.INTEGER
    },
    priceEach: {
      type: DataTypes.INTEGER
    },
    customerNumber: {
      type: DataTypes.INTEGER
    }
  })
  return Order
}

