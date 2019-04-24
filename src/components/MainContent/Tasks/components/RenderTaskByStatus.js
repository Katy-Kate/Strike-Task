import React from "react";
import TaskConteiner from "../components/TaskConteiner";
import TasksHOC from "../../../HOC/TasksHOC";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../../../images/iconsSVG";

class RenderTaskByStatus extends React.Component {
  render() {
    const { tickets, updateTicket } = this.props;
    let renderTickets;
    if (this.props.idStatus) {
      renderTickets = tickets.filter(item => {
        return Number(item.status) === this.props.idStatus;
      });
    } else {
      renderTickets = tickets;
    }

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
RenderTaskByStatus.defaultProps = {
  tickets: []
};
RenderTaskByStatus.propTypes = {
  tickets: PropTypes.array.isRequired,
  updateTicket: PropTypes.func.isRequired,
  idStatus: PropTypes.number
};
export default TasksHOC(RenderTaskByStatus);
