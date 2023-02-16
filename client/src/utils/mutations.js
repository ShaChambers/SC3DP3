import { gql } from "@apollo/client";
//mutation for user login
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//mutation for user signup
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//mutation for add history
export const ADD_HISTORIES = gql`
  mutation addHistory($histories: String!) {
    addHistory(histories: $histories) {
      _id
      person
      description
    }
  }
`;
