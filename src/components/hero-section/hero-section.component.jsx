import React from "react";
import "./hero-section.styles.scss";
import Logo from "../../logo.png";
import Button from "../button/button.component";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_content">
        <h1 className="hero_title">מבצעים מיוחדים על כל המוצרים</h1>
        <p className="sub_title">
          מגוון רחב של תבלינים במחירים משתלמים במיוחד מזמנים היום מקבלים היום משלחוים מהירים מהיום להיום
          מגוון רחב של תבלינים במחירים משתלמים במיוחד מזמנים היום מקבלים היום משלחוים מהירים מהיום להיום

        </p>
        <Button
          size={350}
          class="primary-button"
          text="לחנות התבלינים"
        ></Button>
      </div>

      <div className="logo_container">
        <img className="hero_logo" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
