import React from "react";
import "./nav-links.styles.scss";

const NavLinkes = (props) => {
  const { direction, display, menusItems } = props;

  const styles = {
    display: display,
    flexDirection: direction,
  };


    return (
      <div className="navbar_links">
        <ul style={styles}>
          {menusItems.map(({ title, id }) => {
            return (
              <li key={id} className="link_item">
                <a className="link" href="">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
 
};

export default NavLinkes;
