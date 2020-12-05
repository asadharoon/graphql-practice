const { gql } = require("apollo-server-express");

module.exports = gql`
  input UserInput {
    email: String!
    password: String!
  }
  type Query {
    users: Int!
  }
  type Response {
    status: Int!
    message: String!
  }
  type Mutation {
    loginUser(user: UserInput): Response!
  }
`;
