import React from "react";
import './nav-links.styles.scss'

const NavLinkes = (prop)=>{

    const {direction,display} = prop;
    const styles ={
        display: display,
        flexDirection:direction
    }

    return (
        <div  className="navbar_links">
        <ul style={styles} className="">
            <li className="link_item">
                <a className="link" href="">
                    ראשי
                </a>
            </li>
            <li className="link_item">
                <a className="link" href="">
                    אודות
                </a>
            </li>
            <li className="link_item">
                <a className="link" href="">
                    חנות
                </a>
            </li>
            <li className="link_item">
                <a className="link" href="">
                    קולקציות
                </a>
            </li>
            <li className="link_item">
                <a className="link" href="">
                    צור קשר
                </a>
            </li>
        </ul>
    </div>
    )
}

export default NavLinkes;