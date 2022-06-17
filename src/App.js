import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/index";

import AboutIndex from "./pages/About/index";


const App = () => {
  return (
      <Router>
          <div className='App'>
          |<Route exact path="/" component={AboutIndex} />
          </div>
      </Router>
  );
};



export default App;
