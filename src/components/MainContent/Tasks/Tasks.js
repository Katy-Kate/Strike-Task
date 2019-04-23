import React from "react";
import TaskConteiner from "./components/TaskConteiner";
import TasksHOC from "../../HOC/TasksHOC";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../../images/iconsSVG";

class Tasks extends React.Component {
  render() {
    const { tickets, updateTicket } = this.props;

    if (!tickets.length) {
      return <EmptyFolderIcon />;
    } else {
      return (
        <div className="new-tasks--wraper">
          <div className="new-tasks">
            {tickets.map(item => {
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
Tasks.defaultProps = {
  tickets: []
};
Tasks.propTypes = {
  tickets: PropTypes.array.isRequired,
  updateTicket: PropTypes.func.isRequired
};
export default TasksHOC(Tasks);
