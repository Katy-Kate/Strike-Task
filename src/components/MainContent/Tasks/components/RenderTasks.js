import React from "react";
import TaskConteiner from "./TaskConteiner";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../../../images/iconsSVG";

class RenderTasks extends React.Component {
  render() {
    const { tickets, idStatus, priorityId } = this.props;
    let renderTickets;
    let renderBy;
    priorityId && (renderBy = "priority");
    idStatus && (renderBy = "status");

    if (renderBy) {
      renderTickets = tickets.filter(item => {
        return Number(item[renderBy]) === (idStatus || priorityId);
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
              return <TaskConteiner key={item.id} item={item} />;
            })}
          </div>
        </div>
      );
    }
  }
}
RenderTasks.defaultProps = {
  tickets: []
};
RenderTasks.propTypes = {
  tickets: PropTypes.array.isRequired,
  idStatus: PropTypes.number,
  priorityId: PropTypes.number
};
export default RenderTasks;
