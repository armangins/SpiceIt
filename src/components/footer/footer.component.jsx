import React from "react";
import "./footer.styles.scss";
import Logo from "../../logo.png";
import CardsIcons from "../../icons/cards.png";
import NavLinks from "../navbar/nav-item/nav-links.component";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_item logo">
        <img src={Logo} alt="" />
      </div>
      <div className="footer_item links">
        <div className="footer_title">
          <h4>תפריט</h4>
          <NavLinks direction="column" display="flex"></NavLinks>
        </div>

        <div className="footer_title">
          <h4>תפריט</h4>
          <NavLinks direction="column" display="flex"></NavLinks>
        </div>

        <div className="footer_title">
          <h4>תפריט</h4>
          <NavLinks direction="column" display="flex"></NavLinks>
        </div>
      </div>

      <div className="footer_item icons">
        <img className="cards-icons" src={CardsIcons} alt="" />
      </div>
    </div>
  );
};

export default Footer;
