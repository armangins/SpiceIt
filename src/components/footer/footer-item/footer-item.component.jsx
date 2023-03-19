import React from "react";
import NavLinks from "../../navbar/nav-item/nav-links.component";
import "./footer-item.styles.scss";

const FooterItem = (props) => {

  const { menusItems } = props;

  return (
    <div className="footer_title">
      <h4>תפריט</h4>
      <NavLinks
        linksGap="5px"
        menusItems={menusItems}
        direction="column"
        display="flex"
      ></NavLinks>
    </div>
  );
};

export default FooterItem;
