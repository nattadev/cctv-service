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

  input RegisterInput { 
    firstname: String!
    lastname: String!
    username: String!
    email: String!
  }
  
  type Mutation {

    Register(value: RegisterInput): Users

  }
  
`;

module.exports = typeDefs