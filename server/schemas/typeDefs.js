const { gql } = require("apollo-server-express");

//typeDEF for User and history
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    history: [History]!
  }

  type History {
    _id: ID
    person: String
    description: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    history(person: String): [History]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    removeHistory(description: String!, person: String!): History
    login(email: String!, password: String!): Auth
    addHistory(description: String!, person: String!): History
  }
`;

module.exports = typeDefs;
