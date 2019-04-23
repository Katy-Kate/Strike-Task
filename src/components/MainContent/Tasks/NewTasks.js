import React from "react";
import TaskConteiner from "./components/TaskConteiner";
import TasksHOC from "../../HOC/TasksHOC";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../../images/iconsSVG";

class NewTasks extends React.Component {
  render() {
    const { tickets, updateTicket } = this.props;
    let renderTickets = tickets.filter(item => {
      return Number(item.status) === 1;
    });
    if (!renderTickets.length) {
      return <EmptyFolderIcon />;
    } else {
      return (
        <div className="new-tasks--wraper">
          <div className="new-tasks">
            {renderTickets.map(item => {
              return (
                <TaskConteiner
                  key={item.id}
                  item={item}
                  updateTicket={updateTicket}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}
NewTasks.defaultProps = {
  tickets: []
};
NewTasks.propTypes = {
  tickets: PropTypes.array.isRequired,
  updateTicket: PropTypes.func.isRequired
};
export default TasksHOC(NewTasks);
