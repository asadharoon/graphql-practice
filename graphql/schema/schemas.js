const { buildSchema } = require("graphql");

// const schemas=buildSchema(`
//     schema {
//         query:
//         mutation:
//     }
// `)

// type Book etc are Table/Doc of Type Book which includes ID,title....
// input AuthorInput etc are inputs which we will pass in params of functions created in mutations
// in Rootquery we will write getData Queries with name.
const schemas = buildSchema(`
    type Book{
        _id: ID!
        title:String!
        pages:Int!
        Author:Author!
    }
    type Author{
        _id:ID!
        name:String!
        date:String!
    }
    input AuthorInput{
        _id:ID!
        name:String!
        date:String!
    }
    input BookInput{
        title:String!
        Author:String!
        pages:Int!
        _id:ID!
    }
    type RootQuery{
        authors:[Author!]!
        books:[Book!]!
    }
    type RootMutation{
        createAuthor(author:AuthorInput): Author
        createBook(book:BookInput):Book!
    }
    schema {
        query:RootQuery
        mutation:RootMutation
    }
`);
module.exports = { schemas };
