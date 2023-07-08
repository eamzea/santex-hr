import { useQuery } from '@apollo/client';
import { Container } from './ProductList.style';
import { GET_PRODUCTS } from '../../graphql/queries';
import Product from '../Product';
import { ProductInterface } from '../../types';

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <></>;
  if (error)
    return (
      <>
        <p>Something bad happened</p>
      </>
    );

  return (
    <Container>
      {data.products.items.filter((product: ProductInterface) => product.description).map((product: ProductInterface) => (
        <Product product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
