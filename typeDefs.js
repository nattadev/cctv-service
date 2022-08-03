const { gql } = require("apollo-server-express");


const typeDefs = gql`
   
   type Users {
    id:ID
    firstname: String
    lastname: String
    username: String
    email: String
   }

  type Query {
    hello: String
    getAllUsers: [Users]
    getUsers(id:ID): Users
  }

  input UsersInput { 
    firstname: String!
    lastname: String!
    username: String!
    email: String

  }
  
  type Mutation {

    addUser(user: UsersInput): Users

  }
  
`;

module.exports = typeDefs