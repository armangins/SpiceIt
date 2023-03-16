import React from "react";
import "./nav-icons.styles.scss";
import UserIcon from "../../../icons/user-icon.png";
import CartIcon from "../../../icons/cart.png";

const NavIcons = () => {
  return (
    <div className="navbar_icons">
      <ul className="icons_list">
        <li className="icon_list_item">
          <a href="">
            <img className="navbar_icon_image" src={CartIcon} alt="cart_icon" />
          </a>
        </li>
        <li className="icon_list_item">
          <a href="">
            <img className="navbar_icon_image" src={UserIcon} alt="user_icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavIcons;
