import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import Product from '../Product';
import { Container } from './ProductList.style';
import { GET_PRODUCTS } from '../../graphql/queries';
import { ProductInterface } from '../../types';

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const products = useMemo(() => {
    return loading
      ? []
      : data.products.items.filter(
          (product: ProductInterface) => product.description
        );
  }, [data]);

  if (loading) return <></>;
  if (error)
    return (
      <>
        <p>Something bad happened</p>
      </>
    );

  return (
    <Container>
      {products.map((product: ProductInterface) => (
        <Product
          key={`${product.description}-${Math.random()}`}
          product={product}
        />
      ))}
    </Container>
  );
};

export default ProductList;
