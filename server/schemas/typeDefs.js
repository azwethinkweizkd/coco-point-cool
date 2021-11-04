const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    _id: ID
    name: String!
    email: String
    review: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    customers: [Customer]!
  }

  type Mutation {
    addCustomer(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
