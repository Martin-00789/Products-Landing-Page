import './App.css';
import { ProductContainer } from './Components/ProductContainer';
import { Product } from './Components/Product';
import data from "./products.json"

function App() {
  return (
    <ProductContainer>
      {data.map( product => 
        <Product 
          key={product.name}
          name={product.name}
          discount={product.discount}
          oldPrice={product.price}
          newPrice={product.price - (product.price*product.discount / 100)} 
        />
      )}
    </ProductContainer>
  );
}

export default App;
