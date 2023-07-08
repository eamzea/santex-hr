import { useQuery } from '@apollo/client';
import { Container } from './ProductList.style';
import { GET_PRODUCTS } from '../../graphql/queries';

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <></>;
  if (error)
    return (
      <>
        <p>Something bad happened</p>
      </>
    );

  return <Container>List</Container>;
};

export default ProductList;
