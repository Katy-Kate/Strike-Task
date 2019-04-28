import React from "react";
import TaskConteiner from "./TaskConteiner";
import TasksHOC from "../../../HOC/TasksHOC";

class RenderTasks extends React.Component {
  render() {
    return (
      <div className="new-tasks--wraper">
        <div className="new-tasks">
          {this.props.renderTickets.map(item => {
            return <TaskConteiner key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

RenderTasks.defaultProps = {
  renderTickets: []
};

export default TasksHOC(RenderTasks);
