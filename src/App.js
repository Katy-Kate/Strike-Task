import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AppOfAuthPage from "./pages/AppOfAuthPage";
import SingUpPage from "./pages/SingUpPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={SingUpPage} />
          <Route exact path="/app-of-auth" component={AppOfAuthPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
