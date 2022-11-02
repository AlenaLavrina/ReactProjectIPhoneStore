import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Favorites from './components/favorites/Favorites'
import FavoritesCard from './components/favorites/favoritesCard/favoritesCard'
import Home from "./components/Home"

function App() {
  //state для хранения товаров
  const [products, setProducts] = React.useState([]);
  //state состояния корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  //state для хранения товаров в корзине                                                                                                                                                                                                                                                                 
  const [cartItems, setCartItems] = React.useState([]);
  //state для хранения избранных товаров
  const [favoritesItems, setFavoritesItems] = React.useState([]);
  //state для поиска
  const [search, setSearch] = React.useState('');
  //state для хранения состояния загрузки
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
/*    fetch('https://63500d6c78563c1d82b790cf.mockapi.io/products').then((res) =>{
    return res.json();
  })
  .then((myJson) => {
    setProducts(myJson)
  });*/

  async function axiosData(){
    const cartData = await axios.get('https://63500d6c78563c1d82b790cf.mockapi.io/cart')
    const favoritesData = await axios.get('https://63500d6c78563c1d82b790cf.mockapi.io/favorites')
    const productsData = await axios.get('https://63500d6c78563c1d82b790cf.mockapi.io/products')

    setLoading(false)

    setCartItems(cartData.data);
    setFavoritesItems(favoritesData.data);
    setProducts(productsData.data);
  }
  axiosData()
  }, [])

  const removeCartItem = (id) => {
    axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  
  return (
    <div className="App">
      {cartOpened ? <Cart removeCartItem={removeCartItem} cartItems={cartItems} closeCart={ () => setCartOpened(false)} /> : null}
      <Header openCart={ () => setCartOpened(true)} cartItems={cartItems}/>
      <Routes>
      <Route path='/favorites' element={
        <Favorites
        favoritesItems={favoritesItems}
        setFavoritesItems={setFavoritesItems}
        cartItems={cartItems}
        setCartItems={setCartItems} 
        />
      }
      />
       
      <Route path='/' element={
        <Home 
        items={products} 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        setSearch={setSearch}
        search={search}
        favoritesItems={favoritesItems}
        setFavoritesItems={setFavoritesItems}
        loading={loading}
        />
}
/>
</Routes>
      <Footer />
    </div>
  );
}

export default App;
