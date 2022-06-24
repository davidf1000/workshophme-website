import { gql } from '@apollo/client';

const LOGIN = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export {}
