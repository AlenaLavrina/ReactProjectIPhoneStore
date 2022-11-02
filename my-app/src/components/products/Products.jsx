import Card from "./card/Card"
import style from "./products.module.css"
import axios from 'axios'


const Products = (props) =>{

  const onAddToCart = async(objCart) => {
    try{
      const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if(findCartItem){
        axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/cart/${findCartItem.id}`)
        props.setCartItems(prev => prev.filter(cartItem => cartItem.id !==objCart.myId))
      }
      else{
        const {data} = await axios.post('https://63500d6c78563c1d82b790cf.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, data]);
      }
    }
    catch{
      alert('Не удалось добавить товар в корзину')
    }
  }

  const AddToFavorites = async (objFavorite) =>{
    try{
      const findFavoriteItem = props.favoritesItems.find(favoriteItem => favoriteItem.myId === objFavorite.id)
      if(findFavoriteItem){
        axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/favorites/${findFavoriteItem.id}`)
      }
      else{
        const {data} = await axios.post('https://63500d6c78563c1d82b790cf.mockapi.io/favorites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, objFavorite]);
      }
    }
    catch{
      alert('Не удалось добавить в избранное')
    } 
  }

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }
   
  const renderCard = () => {
    const filterItems = props.items.filter((item) => 
    item.title.toLowerCase().includes(props.search.toLowerCase()))
  

  return(props.loading ? [...Array(6)] : filterItems).map((obj, index) => {
    return(
      <Card
                key = {index}
                {...obj}
               
                isAdded={props.cartItems.some((objIsAdded) => objIsAdded.myId === obj.myId)}
                isFavorite={props.favoritesItems.some((objIsFavorite) => objIsFavorite.myId === obj.myId)}
                isLoading={props.loading}
                AddToFavorites={
                  (favoritesObj) => {
                    AddToFavorites(favoritesObj)
                  }
                }
                onClickPlus={
                  () => {
                    alert(obj.title)
                  }
                }

                /*onClickFavorite={
                    () =>{
                      
                      alert('Товар ' + obj.title + ' добавлен в избранное')
                    }
                  }*/
                  onPlus={(cartObj) =>{
                    onAddToCart(cartObj)
                  }}
                />
    )
  })
}
    return(
        <div className={style.product_section}>
          <div className={style.search}>
          
        <h2>{props.search ? 'Поиск по запросу: ' + props.search : 'Все смартфоны' }</h2>
        <div className={style.search_block}>
          <img src="/img/search.png" alt="search" />
          <input onChange={onSearchInput} placeholder="Поиск по товарам" />
        </div>
        </div>
        <div className={style.products}>
          {
            renderCard()
          }

        </div>
      </div>
    )
}


export default Products