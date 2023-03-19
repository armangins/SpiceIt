import React from "react";
import "./card.styles.scss";

const Card = (props) => {
  const { product } = props;

  return (
    <div>
      <div className="product_card">
        <div className="badge"></div>
        <div className="product_tumb">
          <img className="product_img" src={product.productImage} alt="" />
        </div>
        <div className="product_details">
          <h4 className="product_title">{product.title}</h4>
          <p className="product_description">{product.description}</p>
          <div className="product_bottom_details">
            <div className="product_price">
              <span className="unit">
                <small>לק"ג/</small>
              </span>
              <span className="pricing">₪{product.price}</span>
            </div>
            <div className="product_buttons"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
