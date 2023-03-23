
import React from "react";
import "./navbar.styles.scss";
import Logo from "../../logo.png";
import NavActionButton from "../navbar/navbar-action-buttons/nav-icons.component";
import NavLinks from "../navbar/nav-item/nav-links.component";
import {Link} from "react-router-dom";

const Navbar = () => {

  const menusItems = [
    {
      id: 775464,
      title: "ראשי",
      url:"/",
    },

    {
      id: 7751464,
      title: "החנות התבלינים  ",
      url:"/auth",
    },

    {
      id: 77364,
      title: "קטגוריות",
      url:"categories",
    },

    {
      id: 77542,
      title: "שאלות ותשובות",
      url:"/about",
    },

    {
      id: 7777364,

      title: "צור קשר",
      url:"/contact-us",
    },
  ];

  return (
    <div className="navbar_container">
      <div className="navbar_items">
        <NavActionButton></NavActionButton>
        <NavLinks menusItems={menusItems}></NavLinks>
        <div className="logo_container">
       <Link to="/">
       <img className="logo" src={Logo} alt="" />
       </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
