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
    <div className="slider_container">
      <Title text="Our Specials "></Title>
      <Slider  {...settings}>
        {products.map(({ title, description, productImage, price }) => {
          return (
            <div class="product_card">
              <div class="badge">Hot</div>
              <div class="product_tumb">
                <img className="product_img" src={productImage} alt="" />
              </div>
              <div class="product_details">
                {/* <span class="product-catagory">Women,bag</span> */}
                <h4 className="product_title">{title}</h4>
                <p className="product_description">{description}</p>
                <div class="product_bottom_details">
                  <div class="product_price">
                    <span className="unit">
                      <small>לק"ג/₪</small>
                    </span>
                    <span className="pricing">{price}</span>
                  </div>
                  <div class="product_buttons">
                    <FontAwesomeIcon icon={faCartArrowDown} />
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
