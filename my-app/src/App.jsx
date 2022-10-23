import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Aboutus from './components/aboutus/aboutus';


function App() {
  //state для хранения товаров
  const [products, setProducts] = React.useState([]);
  //state состояния корзины
  const [cartOpened, setCartOpened] = React.useState(false);
//state для хранения товаров в корзине
const [cartItems, setCartItems] = React.useState([]);
//state для поиска
const [search, setSearch] = React.useState('');


  React.useEffect(() => {
    fetch('https://63500d6c78563c1d82b790cf.mockapi.io/products').then((res) =>{
    return res.json();
  })
  .then((myJson) => {
    setProducts(myJson)
  })

  }, [])
  
  return (
    <div className="App">
      {cartOpened ? <Cart cartItems={cartItems} closeCart={ () => setCartOpened(false)} /> : null}
      <Header openCart={ () => setCartOpened(true)}/>
      <Banner />      
      <Aboutus />
      
      <Products 
      items={products} 
      cartItems={cartItems} 
      setCartItems={setCartItems} 
      setSearch={setSearch}
      search={search}/>

      <Footer />
    </div>
  );
}

export default App;
