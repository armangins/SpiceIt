import React from "react";
import "./navbar.styles.scss";
import Logo from "../../logo.png";
import NavActionButton from "../navbar/navbar-action-buttons/nav-icons.component";
import NavLinks from "../navbar/nav-item/nav-links.component";

const Navbar = () => {
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

  return (
    <div className="navbar_container">
      <div className="navbar_items">
        <NavActionButton></NavActionButton>
        <NavLinks menusItems={menusItems}></NavLinks>
        <div className="logo_container">
          <img className="logo" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
