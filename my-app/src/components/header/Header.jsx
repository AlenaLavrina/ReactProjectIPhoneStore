import {Link} from 'react-router-dom'
import style from './header.module.css'
const Header = (props) =>{
    return(
        <header>
          <Link to='/'>
        <h1 className={style.logo}>ITECH</h1>
        </Link>
        <nav>
          <Link to='/favorites'>
          <div className={style.nav_item}>
          <img className={style.fav_btn} src='/img/favorite.png' alt="favorite" />
          </div>
          </Link>
          <div className={style.cart_btn}>
              <div className={style.nav_item} onClick = {props.openCart}>
              <img className={style.cartbtn} src='/img/cart.png' alt="cart" />
              </div>
              <button className={style.count_cart_items}>{props.cartItems.length}</button>
          </div>
        </nav>
      </header>
    )
}

export default Header