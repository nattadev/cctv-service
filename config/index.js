require('dotenv').config();

module.exports = {
   BACKEND_PORT: process.env.BACKEND_PORT,
   POSTGRES_USERNAME: process.env.POSTGRES_USERNAME ,
   POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
   POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
   POSTGRES_HOST: process.env.POSTGRES_HOST,
   POSTGRES_PORT: process.env.POSTGRES_PORT,

}