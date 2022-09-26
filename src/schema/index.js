const { mergeSchemas } = require('graphql-tools');
const schema = require('./schema');
const resolvers = require('./resolvers');
const schemas = [schema];
module.exports = mergeSchemas({ schemas, resolvers });
