const {  Sequelize } = require("sequelize");
const db = require("../config/database");

const Users = db.define(
  "users",
  {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  }

);

module.exports = Users
