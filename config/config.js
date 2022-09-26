require('dotenv').config();

module.exports = {
  development: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  test: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  production: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
};

