import React from "react"
import style from "./card.module.css"
const Card = (props) =>{

  const [added, setAdded] = React.useState(false);
  const [favorites, setFavorites] = React.useState(false)
  
  const onClickPlus = () =>{
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id, title, description, price, img});
    setAdded(!added);
  }

  const AddToFavorites = () =>{
    let id = props.id
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.AddToFavorites({id, title, description, price, img});
    setFavorites(!favorites);
  }

    return(
        <div className={style.product_item}>
          {
            favorites === true ? <button onClick={AddToFavorites} className={style.in_favorite_btn}>Убрать из избранного</button>
            : <button className={style.favorite_btn} onClick={AddToFavorites}>Добавить в избранное</button>
          }
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

export default Card