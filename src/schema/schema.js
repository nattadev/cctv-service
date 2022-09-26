const { makeExecutableSchema, gql } = require('apollo-server-express');
const schema = makeExecutableSchema({
  typeDefs: gql`
  type Query {
    hello: String
    getAllUsers: [Users]
    getUsers(id: ID): Users
  }

  type Mutation {
    Register(value: RegisterInput): Users
    UserSetStations(value: UserStationsInput!): Users
  }
  type Users {
    id: ID
    firstname: String
    lastname: String
    username: String
    email: String
  }

  input UserStationsInput {
      user_id: String!
      stations: [StationGroupInput!]!
    }
  input StationGroupInput {
    id: String!
    group: String!
  }
  input RegisterInput {
    firstname: String!
    lastname: String!
    username: String!
    email: String!
  }
`,
})

module.exports = schema;
