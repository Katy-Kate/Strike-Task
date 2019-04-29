import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Team from "../components/MainContent/Team";
import Contacts from "../components/MainContent/Contacts";
import RenderTasks from "../components/MainContent/Tasks/components/RenderTasks";
import Dashboard from "../components/MainContent/Tasks/Dashboard";
import ResultOfSearch from "../components/Search/ZeroResultOfSearch";

import "../styles/tasks.css";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <RenderTasks
                {...props} //props of route
                {...this.props} //other props
              />
            )}
          />
          <Route
            path="/dashboard"
            exact
            render={props => <Dashboard {...props} {...this.props} />}
          />

          <Route
            path="/dashboard/tasks-new"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="1"
                {...props}
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-done"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="3"
                {...props}
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-inworking"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="4"
                {...props}
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-panding"
            exact
            render={props => (
              <RenderTasks
                filterName="status"
                filterValue="2"
                {...props}
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/urgent"
            exact
            render={props => (
              <RenderTasks
                filterName="priority"
                filterValue="4"
                {...props}
                {...this.props}
              />
            )}
          />

          <Route path="/contacts" component={Contacts} />
          <Route path="/team" component={Team} />
          <Route path="/search" component={ResultOfSearch} />
        </Switch>
      </div>
    );
  }
}
export default MainContent;
