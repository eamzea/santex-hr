import { FC, createContext } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';

export const OrderContext = createContext(
  {} as {
    subTotal: null;
    updateOrder: (newValue: any) => void;
  }
);

const OrderProvider: FC = ({ children }) => {
  const { value: subTotal, modifyValue: updateOrder } = useStateWithStorage('orderData');

  return (
    <OrderContext.Provider value={{ subTotal, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
