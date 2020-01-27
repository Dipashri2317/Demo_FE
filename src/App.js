import React from "react";
import {  Route,  Switch ,withRouter} from "react-router-dom";
import RegisterLogin from "./Components/RegisterLogin";
import Welcome from "./Components/Welcome"
import Home from "./Components/Home"
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={RegisterLogin} exact />
      <ProtectedRoutes exact path="/welcome" component={Welcome}  />
      <ProtectedRoutes exact path="/home" component={Home}  />
      </Switch>
    </div>
  );
}

export default withRouter(App);
