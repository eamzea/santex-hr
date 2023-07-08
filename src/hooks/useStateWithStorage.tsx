import { useEffect, useState } from 'react';

const useStateWithStorage = () => {
  const [order, setOrder] = useState<null | {
    orderId: number;
    subTotal: number;
  }>(null);

  useEffect(() => {
    const orderExists = localStorage.getItem('orderData');

    if (orderExists) {
      const { subTotal } = JSON.parse(orderExists);
      const newSubTotal = (order?.subTotal ?? 0) + Number(subTotal)

      localStorage.setItem(
        'orderData',
        JSON.stringify({
          ...order,
          subTotal: newSubTotal
        })
      );
    } else {
      localStorage.setItem(
        'orderData',
        JSON.stringify({
          ...order,
        })
      );
    }
  }, [order]);

  return {
    setOrder,
  };
};

export default useStateWithStorage;
