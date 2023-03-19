import React from "react";
import "./footer.styles.scss";
import Logo from "../../logo.png";
import CardsIcons from "../../icons/cards.png";
import FooterItem from "../footer/footer-item/footer-item.component";

const menusItems = [
  {
    id: 775464,
    title: "ראשי",
  },

  {
    id: 77542,
    title: "אודות",
  },

  {
    id: 7751464,
    title: "החנות התבלינים  ",
  },

  {
    id: 77364,
    title: "קטגוריות",
  },

  {
    id: 7777364,

    title: "צור קשר",
  },
];

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_item logo">
        <img className="logo-img" src={Logo} alt="" />
      </div>
      <div className="footer_items">
        <FooterItem menusItems={menusItems} />
      </div>
      <div className="footer_items">
        <FooterItem menusItems={menusItems} />
      </div>
      <div className="footer_items">
        <FooterItem menusItems={menusItems} />
      </div>

      <div className="footer_item icons">
        <img className="cards-icons" src={CardsIcons} alt="" />
      </div>
    </div>
  );
};

export default Footer;
