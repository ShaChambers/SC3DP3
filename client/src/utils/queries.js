import { gql } from "@apollo/client";
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;
export const QUERY_HISTORIES = gql`
  query getHistories {
    histories {
      _id
      person
      description
    }
  }
`;
