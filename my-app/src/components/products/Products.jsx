import Card from "./card/Card"
import style from "./products.module.css"
import axios from 'axios'


const Products = (props) =>{

  const onAddToCart = async(objCart) => {
    try{
      const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if(findCartItem){
        axios.delete(`http://localhost:3001/cart/${findCartItem.id}`)
        props.setCartItems(prev => prev.filter(cartItem => cartItem.id !==objCart.myId))
      }
      else{
        const {data} = await axios.post('http://localhost:3001/cart', objCart)
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
        axios.delete(`http://localhost:3001/favorites/${findFavoriteItem.id}`)
        props.setFavoritesItems(prev => prev.filter(favoriteItem => favoriteItem.id !==objFavorite.myId))
      }
      else{
        const {data} = await axios.post('http://localhost:3001/favorites', objFavorite)
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
   
  return(
    <div className={style.product_section}>
      <div className={style.search}>  
        <h2>{props.search ? 'Поиск по запросу: ' + props.search : 'Все смартфоны' }</h2>
        <div className={style.search_block}>
        <img src="/img/search.png" alt="search" />
        <input onChange={onSearchInput} placeholder="Поиск по товарам" />
      </div>
    </div>
  <div className={style.products}>{
  (props.items.filter((item) => 
  item.title.toLowerCase().includes(props.search.toLowerCase()))).map((obj, index) =>{
      return(
        <Card
          key = {index}
          {...obj}        
          //isAdded={props.cartItems.some((objIsAdded) => objIsAdded.myId === obj.myId)}
         isFavorite={props.favoritesItems.some((objIsFavorite) => objIsFavorite.myId === obj.myId)}
                          
        AddToFavorites={(favoritesObj) => {
            AddToFavorites(favoritesObj)
            }
          }
        onClickPlus={ () => {
          alert(obj.title)
        }
      }
        onPlus={(cartObj) =>{
          onAddToCart(cartObj)
            }
          }
            />
          )
       })
    }
   </div>
  </div>
   )
}

export default Products