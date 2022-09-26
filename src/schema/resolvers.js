const getUser = require("../services/getUser");

const Get = require('../controller/get')
// const Register = require("../services/register");
const setStation = require('../controller/set_station')
const register = require('../controller/register')

const resolvers = {
  Query: {
    getAllUsers: () => {
      const user = new getUser();
      return user.UserGetAll();
    },
    getUsers: (parent, { id }, context, info) => {
      return Get(id)
    },
  },
  Mutation: {
    Register: (
      _,
      args,context,info) => {
      return register(args);
    },

    UserSetStations: (root, args, context, info) => {
        return setStation(args)
    }
  },
};

module.exports = resolvers;
// (firstname, lastname, username, email)
// { value: { firstname, lastname, username, email } }