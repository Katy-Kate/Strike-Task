import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Team from "../components/MainContent/Team";
import Contacts from "../components/MainContent/Contacts";
import Tasks from "../components/MainContent/Tasks/Tasks";
import NewTasks from "../components/MainContent/Tasks/NewTasks";
import TasksDone from "../components/MainContent/Tasks/TasksDone";
import TasksInWorking from "../components/MainContent/Tasks/TasksInWorking";
import TasksCancel from "../components/MainContent/Tasks/TasksCancel";
import TasksPanding from "../components/MainContent/Tasks/TasksPanding";
import "../styles/tasks.css";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Tasks} />
          <Route path="/tasks-new" exact component={NewTasks} />
          <Route path="/tasks-done" exact component={TasksDone} />
          <Route path="/tasks-inworking" exact component={TasksInWorking} />
          <Route path="/tasks-cancel" exact component={TasksCancel} />
          <Route path="/tasks-panding" exact component={TasksPanding} />
          <Route path="/contacts/" component={Contacts} />
          <Route path="/team/" component={Team} />
        </Switch>
      </div>
    );
  }
}
export default MainContent;
