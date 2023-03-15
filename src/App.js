import "./App.styles.scss";
import Hero from "./components/hero-section/hero-section.component";
import Navbar from "./components/navbar/navnar.component";
import CategoriesLayout from "./components/categories/categories-layout.component";
import Section from "./components/section/section.component";
import CallToAction from "./components/call-to-action/call-to-action.component";
import Slider from "./components/slider/slider.component";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
     <div className="main-container">
     <CategoriesLayout></CategoriesLayout>
      <Section></Section>
      <CallToAction></CallToAction>
      <Slider></Slider>
     </div>
    </div>
  );
};

export default App;
