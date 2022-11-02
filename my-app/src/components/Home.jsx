import Banner from "./banner/Banner"
import Aboutus from "./aboutus/aboutus"
import Products from "./products/Products"

const Home = (props) => {
    return(
        <>
            <Banner />      
            <Aboutus />
            <Products 
                items={props.items} 
                cartItems={props.cartItems} 
                setCartItems={props.setCartItems} 
                setSearch={props.setSearch}
                search={props.search}
                favoritesItems={props.favoritesItems}
                setFavoritesItems={props.setFavoritesItems}
                loading={props.loading}
            />
        </>
    )

}

export default Home