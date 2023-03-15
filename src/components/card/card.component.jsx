import React from "react";
import "./card.styles.scss";
import Slider from "react-slick";



const Card = (props)=>{

  return(
    <div className="card-container">
    <div className="card">
        <div className="card-img-container">
            <img src={productImage} className="card-img" alt="" />
        </div>
        <div className="card-content">
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <Button class="primary-button" text="הוסף לעגלת הקניות"></Button>
        </div>
    </div>
</div>
  )
}

export default Card;