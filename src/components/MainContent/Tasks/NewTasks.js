import React from "react";
import CreateNewTask from "./CreateNewTask";

class NewTasks extends React.Component {
  render() {
    return (
      <div className="new-tasks--wraper">
        <CreateNewTask />
        <div className="new-tasks">hhh</div>
      </div>
    );
  }
}
export default NewTasks;
