import React from "react"
import style from "./card.module.css"
import ContentLoader from "react-content-loader"
import { AppContext } from "../../../App"

const Card = (props) =>{

  const context = React.useContext(AppContext)
  
  const onClickPlus = () =>{
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id, myId, title, description, price, img});
    //setAdded(!added);
  }

  const AddToFavorites = () =>{
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.AddToFavorites({id, myId, title, description, price, img});
    //setFavorites(!favorites);
  }

    return(
        <div className={style.product_item}>
         
        {
            context.itemFavorite(props.id) === true ? <button onClick={AddToFavorites} className={style.in_favorite_btn}>Убрать из избранного</button>
            : <button className={style.favorite_btn} onClick={AddToFavorites}>Добавить в избранное</button>
          }
            <img className={style.product_img} src={props.img} alt="iPhone" />
            <p className={style.product_title}>{props.title}</p>
            <p className={style.product_description}>{props.description}</p>
            <p className={style.price}>Цена</p>

            <div className={style.product_price}>
              <span>{props.price} руб.</span>
              <button className={context.itemAdded(props.id) ? 'check_btn' : 'plus_btn'} onClick={onClickPlus}>
                <img src={context.itemAdded(props.id) ? '/img/check.png' : '/img/plus.png'} alt=""/>
              </button>
            </div>
        </div>
    )
}

export default Card