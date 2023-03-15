import React from "react";
import "./hero-section.styles.scss";
import Logo from "../../logo.png"
import Button from "../button/button.component";

const Hero = () => {
    return (
        <div className="hero-container">

            <div className="hero-content">
                <h1 className="hero-title">מבצעים מיוחדים על כל המוצרים</h1>
                <h3 className="sub-title">מגוון רחב של תבלינים במחירים משתלמים במיוחד</h3>
                <h4 >הצטרפו אלינו</h4>
                <Button size={350} class="primary-button" text=",לחנות התבלינים"></Button>
            </div>

            <div className="container-logo">
                <div className="hero-content">
                    <img src={Logo} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero