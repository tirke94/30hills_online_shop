import Navigation from './Components/Navigation/Navigation'
import ProductList from './Components/ProductList/ProductList';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json'
// import { getAllProducts } from './Utils/http';

function App() {
  const [allProducts, setAllProducts] = useState(data.products.data.items)

  const fetchProducts = () => {
    // getAllProducts()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <ProductList products={allProducts} />
      {showCart && <ShoppingCart />}
    </div>
  );
}

export default App;
