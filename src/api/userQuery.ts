import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
query {
  customer {
    id
    email
    firstname
    lastname
   
  }
}
`;