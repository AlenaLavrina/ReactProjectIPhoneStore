import React, {useState} from 'react'
import style from './favoritesCard.module.css'

const FavoritesCard = (props) => {
const [added, setAdded] = React.useState(false);
//const [favorites, setFavorites] = React.useState(true)

const onClickPlus = () =>{
  let title = props.title
  let description = props.description
  let price = props.price
  let img = props.img

  props.onPlus({title, description, price, img});
  setAdded(!added);
}

const AddToFavorites = () =>{
  props.AddToFavorites(props.id);
  //setFavorites(!favorites);
}

return(
    <div className={style.product_item}>
          {/*
            favorites === true ? <button onClick={AddToFavorites} className={style.in_favorite_btn}>В избранном</button>
            : <button className={style.favorite_btn} onClick={AddToFavorites}>Добавить в избранное</button>
          */}
          <button onClick={AddToFavorites} className={style.in_favorite_btn}>Убрать из избранного</button>
            <img className={style.product_img} src={props.img} alt="iPhone XR" />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            <div className={style.product_price}>
              <span>{props.price} руб.</span>
              <button className={added ? 'check_btn' : 'plus_btn'} onClick={onClickPlus}>
                <img src={added ? '/img/check.png' : '/img/plus.png'} alt=""/>
              </button>
            </div>
          </div>
)
}

export default FavoritesCard