import React from "react";
import style from "./favorites.module.css"
import axios from 'axios'
import FavoritesCard from "./favoritesCard/favoritesCard";

const Favorites = (props) => {

    const onAddToFavorites = (obj) => {
        axios.post('https://63500d6c78563c1d82b790cf.mockapi.io/cart', obj)
        props.setCartItems([...props.cartItems, obj]);
      }

      const onRemoveFavorites =(id) => {
        axios.delete(`https://63500d6c78563c1d82b790cf.mockapi.io/favorites/${id}`)
        props.setFavoritesItems((prev) => prev.filter(item => item.id !== id))
      }

    return(
        <div className={style.products_section}>
            <div className={style.search}>
        </div>
            <h2>Избранные товары</h2>
        <div className={style.products}>
            {
                props.favoritesItems.map(obj => {
                    return(
                        <FavoritesCard
                        key={obj.id}
                        id={obj.id}
                        title={obj.title}
                        description={obj.description}
                        price={obj.price}
                        img={obj.img}
                        AddToFavorites={
                            (favoritesObject) => {
                                onRemoveFavorites(favoritesObject)
                            }
                        }
                        onPlus={
                            (cartObj) => {
                                onAddToFavorites(cartObj)
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

export default Favorites