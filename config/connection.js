const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host : process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize;