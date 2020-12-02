const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const graphQLHttp = require("express-graphql").graphqlHTTP;
const graphQLSchema = require("./graphql/schema/schemas");
const graphQLResolvers = require("./graphql/resolvers/resolvers");
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphQLHttp({
    schema: graphQLSchema.schemas,
    graphiql: true,
    rootValue: { ...graphQLResolvers.resolvers },
  })
);
// open Interface and write queries
// No.1

// query{
// authors{
//    name
//   date
//  }
//  }

// No.2

// query{
//   books{
//     title
//     Author{
//       name
//       date

//     }
//   }
// }
app.listen(8000, () => {
  console.log("server is listening on ", 8000);
});
