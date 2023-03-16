import React from "react";
import "./card.styles.scss";

const Card = (props) => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="card_img_container">
          <img src={productImage} className="card_img" alt="" />
        </div>
        <div className="card_content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Button class="primary-button" text="הוסף לעגלת הקניות"></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
