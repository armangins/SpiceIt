import React from "react";
import Slider from "react-slick";
import { products } from "../../assets/data";
import "./slider.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../title/title.component";
import Card from "../card/card.component";

const ProductsSlider = () => {
  const settings = {
    variableWidth: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive:[
      {
        breakpoint:1440,
        settings:{
    
          arrows: true,
          infinite: true,
          speed: 700,
          slidesToShow: 3,
          slidesToScroll: 1,
      
        }
      }
    ]
  };

  return (
    <div className="slider_container">
      <Title text="Our Specials " />
      <Slider {...settings}>
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </Slider>
    </div>
  );
};
export default ProductsSlider;
