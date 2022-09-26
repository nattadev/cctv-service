const express = require("express");
const db = require("../config/database");
const { ApolloServer } = require("apollo-server-express");
const schema = require('../src/schema');
const { Utility } = require('rpro-utility');
const { register } = require('prom-client');
const createMetricsPlugin = require('apollo-metrics');
const { createServer } = require('http');
const morgan = require('morgan');
const userAgent = require('express-useragent');

const {
  Helper,
  Validate,
  Logger,
  Enumerations,
} = Utility;
const { ERROR_NAME } = Enumerations;
const logger = Logger.Logger('server');
const port = process.env.PORT || 3031
const path = '/images'
const env = process.env.NODE_ENV || 'development';

module.exports = (options = {}) => {
  const app = express(); 
  const subscriptionsPath = '/subscriptions'
  logger.info('Initialize graphql server');
  const apolloMetricsPlugin = createMetricsPlugin(register)
  
  db.authenticate()
    .then(() => console.log("database connected"))
    .catch((err) => console.log("Eror : " + err));


  
  app.use(express.urlencoded({ extended : false  }));
  app.use(express.json());


  const server = new ApolloServer({
    schema,
    playground: env !== 'production',
    introspection: env !== 'production',
    formatError: (err) => {
      return Helper.handleError(err)
    },
    subscriptions: {
      path: subscriptionsPath,
    },
    plugins: [apolloMetricsPlugin],
    // IMPORTANT: tracing needs to be enabled to get resolver and request timings!
    tracing: true,
  });
  logger.info('Initialize logger');
  app.use(morgan(
    ':remote-addr :remote-user ":method :url HTTP/:http-version'
    + ':status :res[content-length] (:response-time ms)" ":referrer" ":user-agent"',
    { stream: logger.stream },
  ));

  server.applyMiddleware({ app, path, bodyParserConfig: { limit: '14mb' } });

  logger.info('Initialize HTTP Heading Definition');
  app.disable('x-powered-by');
  app.set('trust proxy', true);
  app.set('options', options);
  app.set('port', port);

  app.use(express.json({ limit: '14mb' }));
  app.use(userAgent.express());
  

  const httpServer = createServer(app);
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen(port, () => {
    logger.info(`Listening at http://127.0.0.1:${port}${path}`);
    logger.info(`WebSockets listening on ws://127.0.0.1:${port}${server.subscriptionsPath}`);
    logger.info(`Environment is ${env}`);
  });
  return httpServer;
}

