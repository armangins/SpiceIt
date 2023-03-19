import React from "react";
import "./nav-icons.styles.scss";
import UserIcon from "../../../assets/icons/user-icon.png";
import CartIcon from "../../../assets/icons/cart.png";

const NavIcons = () => {
  return (
    <div className="navbar_icons">
      <ul className="icons_list">
        <li className="icon_list_item cart_total">
          <a>
            {" "}
            <small>₪</small> הסל שלי: 40
          </a>
          <a href="">
            <img className="navbar_icon_image" src={CartIcon} alt="cart_icon" />
          </a>
        </li>
        <li className="icon_list_item">
          <a>התחברות/הרשמה</a>
          <a href="">
            <img className="navbar_icon_image" src={UserIcon} alt="user_icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavIcons;
