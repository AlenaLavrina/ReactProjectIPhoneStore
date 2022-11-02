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

export const AppContext = React.createContext({})

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


  React.useEffect(() => {
/*    fetch('https://63500d6c78563c1d82b790cf.mockapi.io/products').then((res) =>{
    return res.json();
  })
  .then((myJson) => {
    setProducts(myJson)
  });*/

  async function axiosData(){
    const cartData = await axios.get('http://localhost:3001/cart')
    const favoritesData = await axios.get('http://localhost:3001/favorites')
    const productsData = await axios.get('http://localhost:3001/products')

    setCartItems(cartData.data);
    setFavoritesItems(favoritesData.data);
    setProducts(productsData.data);
  }
  axiosData()
  }, [])

  const removeCartItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const itemAdded = (id) => {
    return cartItems.some((objCart) => objCart.id === id)
  }

  const itemFavorite= (id) => {
    return favoritesItems.some((objFavorite) => objFavorite.id === id)
  }
  
  return (
    <AppContext.Provider value={{
      products,
      cartItems, 
      favoritesItems, 
      setCartItems, 
      setFavoritesItems, 
      setProducts,
      itemAdded,
      itemFavorite
      }}>
    <div className="App">
      {cartOpened ? <Cart 
      removeCartItem={removeCartItem} 
      cartItems={cartItems} 
      closeCart={ () => setCartOpened(false)} 
      totalPrice={
        cartItems.reduce((totalElements, objPrice) => totalElements + objPrice.price, 0)
      }
      /> : null}
      <Header openCart={ () => setCartOpened(true)} cartItems={cartItems}/>
      <Routes>
      <Route path='/favorites' element={
        <Favorites />
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
        />
}
/>
</Routes>
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;