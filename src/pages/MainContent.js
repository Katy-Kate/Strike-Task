import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Team from "../components/MainContent/Team";
import Contacts from "../components/MainContent/Contacts";
import RenderTaskByStatus from "../components/MainContent/Tasks/components/RenderTaskByStatus";

import "../styles/tasks.css";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            exact
            render={props => <RenderTaskByStatus {...props} />}
          />

          <Route
            path="/tasks-new"
            exact
            render={props => <RenderTaskByStatus {...props} idStatus={1} />}
          />
          <Route
            path="/tasks-done"
            exact
            render={props => <RenderTaskByStatus {...props} idStatus={3} />}
          />
          <Route
            path="/tasks-inworking"
            exact
            render={props => <RenderTaskByStatus {...props} idStatus={4} />}
          />

          <Route
            path="/tasks-panding"
            exact
            render={props => <RenderTaskByStatus {...props} idStatus={2} />}
          />
          <Route path="/contacts/" component={Contacts} />
          <Route path="/team/" component={Team} />
        </Switch>
      </div>
    );
  }
}
export default MainContent;
