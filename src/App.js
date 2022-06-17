import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/index";

import LoginIndex from "./pages/Auth/Login/index";
import AboutIndex from "./pages/About/index";


const App = () => {
      <Router>
          <div className='App'>
          |<Route exact path="/" component={AboutIndex} />
           <Route exact path="/login" component={LoginIndex} />
          </div>
      </Router>
  );
};
export default App;
