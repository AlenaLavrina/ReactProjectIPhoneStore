import style from './header.module.css'
const Header = (props) =>{
    return(
        <header>
        <h1 className={style.logo}>ITECH</h1>
        <nav>
          <a className={style.nav_item}>Избранное</a>
          <a className={style.nav_item} onClick = {props.openCart}>Корзина</a>
        </nav>
      </header>
    )
}

export default Header