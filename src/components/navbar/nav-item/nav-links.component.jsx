import React from "react";
import "./nav-links.styles.scss";
import {Link} from "react-router-dom";

const NavLinkes = (props) => {
  const { direction, display, menusItems, linksGap } = props;

  const styles = {
    display: display,
    flexDirection: direction,
  };

  const linkStyles = {
    padding: linksGap,
  };

  return (
    <div className="navbar_links">
      <ul style={styles}>
        {menusItems.map(({ title, id ,url}) => {
          return (
            <li style={linkStyles} key={id} className="link_item">
              <Link key={id} to={url}  className="link">{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinkes;
