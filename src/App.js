import "./App.styles.scss";
import HomePage from "./components/routes/home-page/home.component";
import AboutPage from "./components/routes/about.component"
import { Route,Routes} from "react-router-dom"
import LayOut from "./components/layout/layout.component";

const App = () => {
  return (
      <div className="main-container">
      <Routes>
        <Route path="/" Component={LayOut} >
        <Route index Component={HomePage} />
        <Route path="about" Component={AboutPage}/>
        </Route>
      </Routes>
      </div>
  );
};

export default App;
