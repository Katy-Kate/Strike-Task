import React from "react";
import PropTypes from "prop-types";
import { EmptyFolderIcon } from "../../images/iconsSVG";
import ZeroResultOfSearch from "../Search/ZeroResultOfSearch";
import {
  getTicketsByFilter,
  getTicketsFromLocalStorage,
  setTicketsToLocalStorage
} from "../../data/TicketsRepository";
const TasksHOC = Container => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        userTickets: [],
        totalCount: 0,
        offset: 0
      };
    }
    componentDidMount() {
      this.updateTicketWIthLocalStorage();
    }
    componentDidUpdate(prevProps) {
      if (
        this.props.filterName !== prevProps.filterName ||
        this.props.filterValue !== prevProps.filterValue
      )
        this.updateTicketWIthLocalStorage();
      if (
        this.props.willUpdateTickets === true &&
        prevProps.willUpdateTickets === false
      ) {
        this.updateTicketWIthLocalStorage();
        this.props.toogleWillUpdateTickets(false);
      }
    }
    updateTicketWIthLocalStorage = () => {
      let resultUserTickets = getTicketsByFilter(
        this.props.filterName,
        this.props.filterValue,
        this.props.user["_id"],
        this.state.offset
      );
      this.updateTicketsData(resultUserTickets);
    };
    updateTicketsData = data => {
      const { userTickets, totalCount } = data;
      this.updateTotalCount(totalCount);
      this.updateUserTickets(userTickets);
    };
    updateTotalCount = totalCount => {
      this.setState({
        totalCount
      });
    };

    updateUserTickets = tickets => {
      this.setState({
        userTickets: tickets
      });
    };

    changePagination = event => {
      let count = event.target.value === "next" ? 1 : -1;
      let res = this.state.offset + count;
      this.updateOffset(res);
    };
    updateOffset = offset => {
      this.setState(
        {
          offset
        },
        () => {
          this.updateTicketWIthLocalStorage();
        }
      );
    };

    replaceTicket = (ticketId, newData) => {
      let allTickets = getTicketsFromLocalStorage();
      let tickets = [];
      allTickets.forEach(item => {
        Number(item.id) === Number(ticketId)
          ? tickets.push(newData)
          : tickets.push(item);
      });
      setTicketsToLocalStorage(tickets);
      this.updateTicketWIthLocalStorage();
    };
    render() {
      const { search } = this.props;
      let renderTickets = [];
      if (search.query) {
        let regExp = new RegExp(search.query);
        renderTickets = this.state.userTickets.filter(item => {
          return regExp.test(item.title) || regExp.test(item.desc);
        });
      } else {
        renderTickets = this.state.userTickets;
      }

      if (renderTickets && !search.query) {
        return (
          <Container
            {...this.props}
            renderTickets={renderTickets}
            offset={this.state.offset}
            totalCount={this.state.totalCount}
            changePagination={this.changePagination}
          />
        );
      } else if (search.query) {
        return <ZeroResultOfSearch />;
      } else {
        return <EmptyFolderIcon />;
      }
    }
  };
};
TasksHOC.propTypes = {};
export default TasksHOC;
