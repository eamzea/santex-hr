import { gql } from '@apollo/client';

export const ADD_PRODUCT_TO_ORDER = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        subTotal
      }
    }
  }
`;
