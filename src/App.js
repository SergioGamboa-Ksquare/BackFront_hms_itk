import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/index";
import LoginIndex from "./pages/Auth/Login/index";
import AboutIndex from "./pages/About/index";
import RegisterIndex from "./pages/Auth/Register/index";


const App = () => {
  return (
      <Router>
          <div className='App'>
          |<Route exact path="/" component={AboutIndex} />
           <Route exact path="/login" component={LoginIndex} />
           <Route exact path="/register" component={RegisterIndex} />
          </div>
      </Router>
  );
};
export default App;
