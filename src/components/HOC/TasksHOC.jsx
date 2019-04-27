import React from "react";
import { getTickets } from "../../data/UserRepository";
import { updateDataWithLocalStorage } from "../../data/UserRepository";

const TasksHOC = (Container, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tickets: []
      };
      console.log("gfnhftghftgh", this.props);
    }
    updateTickets = tickets => {
      this.setState({
        tickets
      });
    };
    componentDidMount() {
      let tickets = getTickets();
      this.updateTickets(tickets);
    }
    componentDidUpdate(prevProps, prevState) {
      if (
        this.state.tickets !== prevState.tickets &&
        prevState.tickets.length !== 0
      ) {
        updateDataWithLocalStorage(this.state.tickets, "tickets");
      }
    }
    updateTicket = (ticketId, newData) => {
      let tickets = [];
      this.state.tickets.forEach(item => {
        item.id === ticketId ? tickets.push(newData) : tickets.push(item);
      });
      this.updateTickets(tickets);
    };
    render() {
      const { tickets } = this.state;
      return (
        <Container
          {...this.props}
          tickets={tickets}
          updateTicket={this.updateTicket}
        />
      );
    }
  };
};
export default TasksHOC;
