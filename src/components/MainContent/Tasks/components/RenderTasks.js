import React from "react";
import TaskConteiner from "./TaskConteiner";
import TasksHOC from "../../../HOC/TasksHOC";
import Pagination from "./Pagination";
import { TAKE_TICKETS } from "../../../../data/app_data";

class RenderTasks extends React.PureComponent {
  render() {
    return (
      <div className="new-tasks--wraper">
        <div className="new-tasks">
          {this.props.renderTickets.map(item => {
            return (
              <TaskConteiner
                key={item.id}
                item={item}
                replaceTicket={this.props.replaceTicket}
              />
            );
          })}
          {this.props.pagination &&
            (this.props.totalTickets > TAKE_TICKETS && (
              <Pagination
                offset={this.props.offset}
                totalTickets={this.props.totalTickets}
                changePagination={this.props.changePagination}
                TAKE_TICKETS={TAKE_TICKETS}
              />
            ))}
        </div>
      </div>
    );
  }
}

RenderTasks.defaultProps = {
  renderTickets: []
};

export default TasksHOC(RenderTasks);
