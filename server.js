// graphql configs
const { ApolloServer } = require("apollo-server-express");
const { mergeTypes, fileLoader } = require("merge-graphql-schemas");
const { app } = require("./servers/httpServer");
const graphQLResolvers = require("./graphql/resolvers/index");
const path = require("path");
const { db } = require("./db/mongoDB");
// merging schemas
const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, "./graphql/typeDefs/"))
);
// making server of graphql for api communications
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: graphQLResolvers.resolvers,
  context: ({ req, res }) => ({ req, res }),
});
apolloServer.applyMiddleware({ app });
//db
db();
