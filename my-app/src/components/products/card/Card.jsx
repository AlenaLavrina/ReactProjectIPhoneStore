import React from "react"
import style from "./card.module.css"
const Card = (props) =>{

  const [added, setAdded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false)
  
  const onClickPlus = () =>{
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({title, description, price, img});
    setAdded(!added);
  }

  const AddToFavorite = () =>{
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.AddToFavorite({title, description, price, img});
    setFavorite(!favorite);
  }

    return(
        <div className={style.product_item}>
          {
            favorite === true ? <button onClick={AddToFavorite} className={style.in_favorite_btn}>В избранном</button>
            : <button className={style.favorite_btn} onClick={AddToFavorite}>Добавить в избранное</button>
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