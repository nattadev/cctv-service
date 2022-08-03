const express = require("express");
const db = require("./config/database");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')


async function startServer() {
  db.authenticate()
    .then(() => console.log("database connected"))
    .catch((err) => console.log("Eror : " + err));

  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

   apolloServer.applyMiddleware({ app:app , path: '/users'})

   app.use((req, res) => {
    res.json('hello')
   } )

  app.listen(5050, () => console.log("Server started in port", 5050));
}

startServer();
