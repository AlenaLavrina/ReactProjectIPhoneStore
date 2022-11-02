import React from "react"
import style from "./card.module.css"
import ContentLoader from "react-content-loader"

const Card = (props) =>{

  const [added, setAdded] = React.useState(props.isAdded);
  const [favorites, setFavorites] = React.useState(props.isFavorite)
  
  const onClickPlus = () =>{
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.onPlus({id, myId, title, description, price, img});
    setAdded(!added);
  }

  const AddToFavorites = () =>{
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img

    props.AddToFavorites({id, myId, title, description, price, img});
    setFavorites(!favorites);
  }

    return(
        <div className={style.product_item}>
          {
            props.isLoading ? 
          
          <ContentLoader 
          speed={2}
          width={290}
          height={443}
          viewBox="0 0 303 463"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="56" rx="3" ry="3" width="303" height="266" /> 
          <rect x="0" y="352" rx="3" ry="3" width="173" height="19" /> 
          <rect x="0" y="25" rx="3" ry="3" width="183" height="17" /> 
          <rect x="0" y="370" rx="3" ry="3" width="234" height="23" /> 
          <rect x="0" y="430" rx="3" ry="3" width="157" height="27" /> 
          <rect x="220" y="417" rx="3" ry="3" width="74" height="42" />
        </ContentLoader> :
        <>
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
            </>
        }
        </div>
    )
}

export default Card