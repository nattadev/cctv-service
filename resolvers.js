const Users = require("./model/user");
const { v4: uuidv4 } = require('uuid');

const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
    getAllUsers: async () => {
      return await Users.findAll();
    },
    getUsers: async (parent, { id }, context, info) => {
      return await Users.findByPk(id);
    },
  },
  Mutation: {
   addUser: async (parent , args , context, info) => {

      const { firstname , lastname ,username , email} = args
      
   }
  }
};

module.exports = resolvers;
