import Card from "./card/Card"
import style from "./products.module.css"
import axios from 'axios'

const products = [
  {
    id: 1,
    title: 'iPhone XR_1',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 2,
    title: 'iPhone XR_2',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 3,
    title: 'iPhone XR_3',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 4,
    title: 'iPhone XR_4',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 5,
    title: 'iPhone XR_5',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 6,
    title: 'iPhone XR_6',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  }  
];

const Products = (props) =>{

  const onAddToCart = (objCart) => {
    try{
      if(props.cartItems.find((item) => item.id === objCart.id)){
        axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/cart/${objCart.id}`)
        props.setCartItems(prev => prev.filter(item => item.id !==objCart.id))
      }
      else{
        axios.post('https://63500d6c78563c1d82b790cf.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, objCart]);
      }
    }
    catch{
      alert('Не удалось добавить товар в корзину')
    }
  }

  const AddToFavorites = (objFavorite) =>{
    try{
      if(props.favoritesItems.find(obj => obj.id === objFavorite.id)){
        axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/favorites/${objFavorite.id}`)
      }
      else{
        axios.post('https://63500d6c78563c1d82b790cf.mockapi.io/favorites', objFavorite)
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
    let priceProduct="42 999"

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
            props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())) 
            .map(obj => {
              return(
                <Card
                key = {obj.id}
                id={obj.id}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
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
            }
            )
          }
        </div>
      </div>
    )
}


export default Products