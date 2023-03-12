import React from "react";
import "./navbar.styles.scss";
import Logo from "../../logo.png";
import UserIcon from "../../icons/user-icon.png";
import CartIcon from "../../icons/cart.png";

const Navbar = () => {
    return (

        <div className="navbar-container">
            <div className="navbar-items">

                <div className="navbar-icons">
                    <ul className="icons-list">
                        <li className="icon-list-item">
                            <a href="">
                                <img
                                    className="navbar-icon-image"
                                    src={CartIcon}
                                    alt="cart-icon"
                                />
                            </a>
                        </li>
                        <li className="icon-list-item">
                            <a href="">
                                <img
                                    className="navbar-icon-image"
                                    src={UserIcon}
                                    alt="user-icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-links">
                    <ul className="">
                        <li className="link-item">
                            <a className="link" href="">
                                ראשי
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="link" href="">
                                אודות
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="link" href="">
                                חנות
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="link" href="">
                                קולקציות
                            </a>
                        </li>
                        <li className="link-item">
                            <a className="link" href="">
                                צור קשר
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="logo-container">
                    <img className="logo" src={Logo} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Navbar;
