import React from "react"
import Slider from "react-slick";
import style from "./Slider.module.css"

const TestSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2700,
        autoplaySpeed: 4500,
      };

      return(
        <Slider {...settings}>
          <div className={style.banner_section}>
        <div className={style.banner}>
          <p className={style.text_banner}>Лучшие цены
            <br />
            <span>на все смартфоны</span>
            <br />
            <button className={style.banner_btn}>Купить iPhone</button>
          </p>
        </div>
      </div>

      <div className={style.banner_section}>
        <div className={style.banner2}>
          <p className={style.text_banner}>Только
            <br />
            <span>оригинальная техника</span>
            <br />
            <button className={style.banner_btn}>Купить iPhone</button>
          </p>
        </div>
      </div>


      <div className={style.banner_section}>
        <div className={style.banner3}>
          <p className={style.text_banner}>Доставка в течение
            <br />
            <span>3 часов</span>
            <br />
            <button className={style.banner_btn}>Купить iPhone</button>
          </p>
        </div>
      </div>
          
        </Slider>
      )

}

export default TestSlider