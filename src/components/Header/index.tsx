import { useContext } from 'react';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import { OrderContext } from '../../context';

const Header = () => {
  const {subTotal} = useContext(OrderContext)

  return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>$ {Number(subTotal).toLocaleString('en') ?? 0}</div>
    </header>
  );
};

export default Header;
