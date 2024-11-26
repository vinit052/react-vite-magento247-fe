import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation login($username: String!, $password: String!) {
    generateCustomerToken(email: $username, password: $password) {
      token
    }
  }`