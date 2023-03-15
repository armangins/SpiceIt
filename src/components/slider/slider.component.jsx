import React from "react";
import Slider from "react-slick";
import { products } from "../../assets/data";
import "./slider.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import Title from "../title/title.component";

const ProductsSlider = () => {
  var settings = {
    variableWidth: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
  <div>
   <Title text="Our Specials "></Title>
    <Slider className="slider-container" {...settings}>
      {products.map(({ title, description, productImage, price }) => {
        return (
          <div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
              <img className="product-img" src={productImage} alt="" />
            </div>
            <div class="product-details">
              {/* <span class="product-catagory">Women,bag</span> */}
              <h4 className="product-title">{title}</h4>
              <p className="product-description">{description}</p>
              <div class="product-bottom-details">
                <div class="product-price">
                  <small></small>₪ {price}
                </div>
                <div class="product-buttons">
                  <FontAwesomeIcon icon={faCartArrowDown}/>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
  );
};
export default ProductsSlider;
