import {gql} from '@apollo/client'

export const GET_PRODUCTS = gql`
  query Products {
    products {
      items {
        description
        featuredAsset {
          source
        }
        variants {
          price
        }
      }
    }
  }
`;
