import Banner from "./banner/Banner"
import Aboutus from "./aboutus/aboutus"
import Products from "./products/Products"
import TestSlider from "./slider/TestSlider"

const Home = (props) => {
    return(
        <>  
            <TestSlider />     
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