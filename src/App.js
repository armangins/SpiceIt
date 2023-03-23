import "./App.styles.scss";
import HomePage from "./components/routes/home-page/home.component";
import { Route,Routes} from "react-router-dom"
import Layout from "./components/layout/layout.component";
import AuthenticationPage from "./components/routes/authentication/authentication.component";

const App = () => {
  return (
      <div className="main-container">
      <Routes>
        <Route path="/" Component={Layout} >
        <Route index Component={HomePage} />
        <Route path="auth" Component={AuthenticationPage} />
        </Route>
      </Routes>
      </div>
  );
};

export default App;
