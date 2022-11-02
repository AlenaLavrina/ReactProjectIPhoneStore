import React from "react";
import style from "./favorites.module.css"
import axios from 'axios'
import FavoritesCard from "./favoritesCard/favoritesCard";
import { AppContext } from "../../App";

const Favorites = (props) => {

    const context = React.useContext(AppContext)

    const onAddToFavorites = (obj) => {
        axios.post('http://localhost:3001/cart', obj)
        context.setCartItems([...context.cartItems, obj]);
      }

      const onRemoveFavorites =(id) => {
        axios.delete(`http://localhost:3001/favorites/${id}`)
        context.setFavoritesItems((prev) => prev.filter(item => item.id !== id))
      }

    return(
        <div className={style.products_section}>
            <div className={style.search}>
        </div>
            <h2>Избранные товары</h2>
        <div className={style.products}>
            {
                context.favoritesItems.map(obj => {
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