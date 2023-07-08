import { Header, ProductList } from './components';
import OrderProvider from './context';

const App = () => {
  return (
    <OrderProvider>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </OrderProvider>
  );
}

export default App;
