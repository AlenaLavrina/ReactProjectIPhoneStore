import CartItem from './CartItem/CartItem';
import style from "./cart.module.css"

const cartProducts = [
  {
    id: 1,
    title: 'iPhone XR_1',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 2,
    title: 'iPhone XR_2',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 3,
    title: 'iPhone XR_3',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  
];
const Cart = (props) => {
    return (
      <div className={style.overlay}>
        <div className={style.cart}>
          <div className={style.title_block}>
            <h2>Корзина</h2>
            <button className={style.close_btn} onClick={props.closeCart}>
              X
            </button>
          </div>
          {props.cartItems.length > 0 ? (
            <div className={style.cart_list}>
              {props.cartItems.map((obj) => {
                return (
                  <CartItem
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    img={obj.img}
                    onRemoveCartItem={props.onRemoveCartItem}
                  />
                );
              })}
            </div>
          ) : (
            <h2>В корзине ничего нет</h2>
          )}
          <div className={style.cart_list}>
            {props.cartItems.map((obj) => {
              return (
                <CartItem
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  price={obj.price}
                  img={obj.img}
                  removeCartItem={props.removeCartItem}
                />
              );
            })}
          </div>
          <div className={style.total_price}>
            <p className={style.total_price_text}>Итог: </p>
            <p className={style.total_price_summ}>65 000 руб.</p>
            <button>Заказать</button>
          </div>
        </div>
      </div>
    );
}
export default Cart