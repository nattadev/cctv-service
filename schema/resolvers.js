
const getUser = require('../services/getUser')
const Register = require('../services/register')



const resolvers = {
  Query: {
    getAllUsers: () => {
      const user = new getUser()
      return user.UserGetAll()
    },
    getUsers: (parent, { id }, context, info) => {
      const user = new getUser()
      return user.UserGet(id)

    },
  },
  Mutation: {
    Register: (_,{ value : {firstname , lastname , username ,email}}, context, info) => {
      return Register(firstname,lastname,username,email)

   }
  }
};

module.exports = resolvers;
