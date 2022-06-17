import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/index";
import LoginIndex from "./pages/Auth/Login/index";
import RegisterIndex from "./pages/Auth/Register/index";
import AboutIndex from "./pages/About/index";




const App = () => {
  return (
    <div className='App'>
        <Router>
          
          <ScrollToTop>
            <Switch>
          |   <Route exact path="/" component={AboutIndex} />
              <Route exact path="/login" component={LoginIndex} />
              <Route exact path="/register" component={RegisterIndex} />
            </Switch>
           </ScrollToTop>
            
        </Router>
      </div>
         
      
  );
};



export default App;
