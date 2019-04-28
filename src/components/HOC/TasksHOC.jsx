import React from "react";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../images/iconsSVG";
import ZeroResultOfSearch from "../Search/ZeroResultOfSearch";

const TasksHOC = (Container, data) => {
  return class extends React.Component {
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
      } else if (search && !renderTicketsBySearch.length) {
        return <ZeroResultOfSearch />;
      } else {
        return <Container renderTickets={renderTickets} />;
      }
    }
  };
};
TasksHOC.defaultProps = {
  tickets: [],
  search: { query: [] }
};
TasksHOC.propTypes = {
  tickets: PropTypes.array.isRequired,
  idStatus: PropTypes.number,
  priorityId: PropTypes.number
};
export default TasksHOC;
