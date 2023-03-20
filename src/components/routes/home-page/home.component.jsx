import React from "react";
import Hero from "../../hero-section/hero-section.component";
import CategoriesLayout from "../../categories/categories-layout.component";
import Section from "../../section/section.component";
import CallToAction from "../../call-to-action/call-to-action.component";
import Carousel from "../../carousel/carousel.component";

const HomePage = () => {
  return (
    <div className="App">
      <div className="main-container">
        <Hero />
        <Carousel />
        <CategoriesLayout />
        <Section />
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
