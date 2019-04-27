import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Team from "../components/MainContent/Team";
import Contacts from "../components/MainContent/Contacts";
import RenderTasks from "../components/MainContent/Tasks/components/RenderTasks";
import Dashboard from "../components/MainContent/Tasks/Dashboard";
import ResultOfSearch from "../components/Search/ResultOfSearch";

import "../styles/tasks.css";

class MainContent extends Component {
  render() {
    console.log(")))", this.props);
    return (
      <div className="main-content">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <RenderTasks
                tickets={this.props.user.tickets}
                {...props} //props of route
                {...this.props} //other props
              />
            )}
          />
          <Route
            path="/dashboard"
            exact
            render={props => (
              <Dashboard
                tickets={this.props.user.tickets}
                {...props}
                {...this.props}
              />
            )}
          />
          <Route
            path="/dashboard/tasks-new"
            exact
            render={props => (
              <RenderTasks
                idStatus={1}
                tickets={this.props.user.tickets}
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
                tickets={this.props.user.tickets}
                idStatus={3}
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
                tickets={this.props.user.tickets}
                idStatus={4}
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
                tickets={this.props.user.tickets}
                idStatus={2}
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
                tickets={this.props.user.tickets}
                priorityId={4}
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
