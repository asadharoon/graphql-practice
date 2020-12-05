const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
  }
  type Query {
    allPosts: [Post!]!
  }
  input PostInput {
    title: String!
    description: String!
  }
  # mutations
  type Mutation {
    createPost(newPost: PostInput): [Post!]!
  }
`;
