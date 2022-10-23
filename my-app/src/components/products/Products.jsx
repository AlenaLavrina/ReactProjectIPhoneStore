import Card from "./card/Card"
import style from "./products.module.css"

const products = [
  {
    id: 1,
    title: 'iPhone XR_1',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 2,
    title: 'iPhone XR_2',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 3,
    title: 'iPhone XR_3',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 4,
    title: 'iPhone XR_4',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 5,
    title: 'iPhone XR_5',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 6,
    title: 'iPhone XR_6',
    description: 'Короткое описание продукта',
    price: '42 999',
    img: '/img/iphone-1.png'
  }  
];

const Products = (props) =>{

  const onAddToCart = (obj) => {
    props.setCartItems([...props.cartItems, obj]);
  }
  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }
    let priceProduct="42 999"

    return(
        <div className={style.product_section}>
          <div className={style.search}>
          
        <h2>{props.search ? 'Поиск по запросу: ' + props.search : 'Все смартфоны' }</h2>
        <div className={style.search_block}>
          <img src="/img/search.png" alt="search" />
          <input onChange={onSearchInput} placeholder="Поиск по товарам" />
        </div>
        </div>
        <div className={style.products}>

          {
            props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())) 
            .map(obj => {
              return(
                <Card
                key = {obj.id}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                onClickPlus={
                  () => {
                    alert(obj.title)
                  }
                }

                /*onClickFavorite={
                    () =>{
                      
                      alert('Товар ' + obj.title + ' добавлен в избранное')
                    }
                  }*/
                  onPlus={(cartObj) =>{
                    onAddToCart(cartObj)
                  }}
                />
              )
            }
            )
          }
        </div>
      </div>
    )
}


export default Products