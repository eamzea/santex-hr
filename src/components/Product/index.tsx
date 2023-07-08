import { FC } from 'react';
import {
  Buy,
  Card,
  Description,
  Footer,
  Image,
  Info,
  Price,
  Variant,
} from './Product.style';
import { ProductInterface } from '../../types';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_TO_ORDER } from '../../graphql/mutations';
import useStateWithStorage from '../../hooks/useStateWithStorage';

const Product: FC<{ product: ProductInterface }> = ({ product }) => {
  const { setOrder } = useStateWithStorage();
  const [addItemToOrder, { data, loading, error }] = useMutation(
    ADD_PRODUCT_TO_ORDER,
    {
      onCompleted: ({ addItemToOrder }) => {
        setOrder({
          orderId: addItemToOrder.id,
          subTotal: addItemToOrder.subTotal
        });
      },
    }
  );

  const handleAdd = (id: string) => {
    addItemToOrder({ variables: { productVariantId: id, quantity: 1 } });
  };

  return (
    <Card>
      <Image src={product.featuredAsset.source} />
      <Info>
        <Description>{product.description}</Description>
        <Variant>Variants Price</Variant>
      </Info>
      <Footer>
        <Price>
          {product.variants.map((price) => (
            <li>$ {Number(price.price).toLocaleString('en')}</li>
          ))}
        </Price>
        <Buy onClick={() => handleAdd(product.id)}>Buy</Buy>
      </Footer>
    </Card>
  );
};

export default Product;
