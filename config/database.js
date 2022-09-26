const config = require('./index')

const { Sequelize } = require('sequelize');

module.exports = new Sequelize(config.POSTGRES_DATABASE,config.POSTGRES_USERNAME, config.POSTGRES_PASSWORD, {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    dialect: 'postgres' 

  })