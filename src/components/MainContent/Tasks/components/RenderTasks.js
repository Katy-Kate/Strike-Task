import React from "react";
import TaskConteiner from "./TaskConteiner";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../../../images/iconsSVG";

class RenderTasks extends React.Component {
  render() {
    const { tickets, idStatus, priorityId } = this.props;
    let renderTickets; //it is array of tickets was filtered
    let renderTicketsBySearch = [];
    let renderBy; //name of filter

    let search = this.props.search.query;
    priorityId && (renderBy = "priority");
    idStatus && (renderBy = "status");

    if (renderBy) {
      renderTickets = tickets.filter(item => {
        return Number(item[renderBy]) === (idStatus || priorityId);
      });
    } else {
      renderTickets = tickets;
    }
    if (search) {
      let regExp = new RegExp(search);
      renderTicketsBySearch = renderTickets.filter(item => {
        return regExp.test(item.title) || regExp.test(item.desc);
      });
    }

    renderTickets = renderTicketsBySearch.length
      ? renderTicketsBySearch
      : renderTickets;

    if (!renderTickets.length && !renderTicketsBySearch.length) {
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
