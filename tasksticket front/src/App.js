import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import resetPasswordCode from "../src/pages/resetPasswordCode";
import resetPassword from  "../src/pages/resetPassword" 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Login from "./pages/login";
import dashboard from "./pages/dashboard";
import register from "./pages/register/index"
import forgetPassword from '../src/pages/forgetPassword';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/register" component={register} />
            <Route exact path="/forgetPassword" component={forgetPassword}/>
            <Route exact path="/resetPasswordCode" component={resetPasswordCode} />
     
     <Route exact path="/resetPassword" component={resetPassword} />
            <Route path="/" component={dashboard} />
          </Switch>



        </div>
      </Router>



    );
  }
}
export default App;
