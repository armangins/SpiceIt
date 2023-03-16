import React from "react";
import "./navbar.styles.scss";
import Logo from "../../logo.png";
import NavIcons from "../navbar/nav-icons/nav-icons.component"
import NavLinks from "../navbar/nav-item/nav-links.component";
const Navbar = () => {
  const menu = [{}];

  return (
    <div className="navbar_container">
      <div className="navbar_items">
        <NavIcons></NavIcons>
        <NavLinks></NavLinks>
        <div className="logo_container">
          <img className="logo" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
