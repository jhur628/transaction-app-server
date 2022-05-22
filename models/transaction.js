const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Transaction extends Model { };

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'transaction',
    timestamps: false
  }
);

module.exports = Transaction;