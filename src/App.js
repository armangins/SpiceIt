import "./App.styles.scss";
import Hero from "./components/hero-section/hero-section.component";
import Navbar from "./components/navbar/navnar.component";
import CategoriesLayout from "./components/categories/categories-layout.component";
import Section from "./components/section/section.component";
import CallToAction from "./components/call-to-action/call-to-action.component";
import Footer from "./components/footer/footer.component";
import Carousel from "./components/carousel/carousel.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="main-container">
        <Carousel />
        <CategoriesLayout />
        <Section />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default App;
