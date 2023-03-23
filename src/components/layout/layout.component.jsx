import React, { Fragment } from "react";
import NavBar from "../navbar/navnar.component";
import {Outlet} from "react-router-dom";
import Footer from "../footer/footer.component";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
