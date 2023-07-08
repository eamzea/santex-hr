import React, { FC, useContext } from 'react';
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
import { OrderContext } from '../../context';

const Product: FC<{
  product: ProductInterface;
}> = ({ product }) => {
  const { updateOrder } = useContext(OrderContext);
  const [addItemToOrder] = useMutation(ADD_PRODUCT_TO_ORDER, {
    onCompleted: ({ addItemToOrder }) => {
      updateOrder(addItemToOrder.subTotal);
    },
  });

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
            <li key={`${price.price.toString()} ${Math.random()}`}>
              $ {Number(price.price).toLocaleString('en')}
            </li>
          ))}
        </Price>
        <Buy onClick={() => handleAdd(product.id)}>Buy</Buy>
      </Footer>
    </Card>
  );
};

export default React.memo(Product);
