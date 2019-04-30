import tickets_data from "./tickets_data.json";
import { TAKE_TICKETS } from "./app_data";

export const getTicketsFromLocalStorage = () => {
  let tickets = JSON.parse(localStorage.getItem("tickets"));
  return tickets || [];
};
export const setTicketsToLocalStorage = data => {
  localStorage.setItem("tickets", JSON.stringify(data));
};

// export const paginationTickets = (offset, userId) => {
//   let tickets = getTicketsByUserId(userId);
//   let totalCount = tickets.length;
//   tickets.sort((a, b) => {
//     return a.id - b.id;
//   });
//   if (offset !== 0) {
//     offset *= TAKE_TICKETS;
//   }
//   console.log("offset", offset);
//   let userTickets = tickets.splice(offset, TAKE_TICKETS);
//   console.log(userTickets);
//   return { totalCount, userTickets };
// };

export const getTicketsByUserId = id => {
  let allTickets = getTicketsFromLocalStorage();
  let userTickets = [];
  userTickets = allTickets.filter(item => {
    return Number(item.user_id) === Number(id);
  });
  return userTickets;
};

export const addNewTicketToLocalStorage = ticket => {
  let tickets = getTicketsFromLocalStorage();
  tickets.push(ticket);
  setTicketsToLocalStorage(tickets);
};

// export const getTicketsByFilter = (
//   filterName,
//   filterValue,
//   userId,
//   offset,
//   searchQuery
// ) => {
//   let tickets = getTicketsByUserId(userId);
//   let totalCount;
//   let filterTickets;
//   let filterTicketsBySearch;

//   if (filterName) {
//     filterTickets = tickets.filter(item => {
//       return Number(item[filterName]) === Number(filterValue);
//     });
//   } else {
//     filterTickets = tickets;
//   }
//   if (searchQuery) {
//     filterTicketsBySearch = filterTickets.filter(item => {
//       return (
//         item.title.toLowerCase().includes(searchQuery) ||
//         item.desc.toLowerCase().includes(searchQuery)
//       );
//     });
//     filterTickets = filterTicketsBySearch;
//   }

//   totalCount = filterTickets.length;
//   filterTickets.sort((a, b) => {
//     return a.id - b.id;
//   });
//   if (offset !== 0) {
//     offset *= TAKE_TICKETS;
//   }
//   console.log("offset", offset);
//   let userTickets = filterTickets.splice(offset, TAKE_TICKETS);
//   return { totalCount, userTickets };
// };

export const getTicketsByFilter = (
  filterName,
  filterValue,
  userId,
  offset,
  searchQuery,
  param,
  direction
) => {
  let tickets = getTicketsByUserId(userId);
  let totalCount;
  let filterTickets;
  let ticketsBySearch;

  if (filterName) {
    filterTickets = getTicketsByParam(tickets, filterName, filterValue);
  } else {
    filterTickets = tickets;
  }
  if (searchQuery) {
    ticketsBySearch = getTicketsBySearch(filterTickets, searchQuery);
    filterTickets = ticketsBySearch;
  }
  if (param) {
    let sortTickets;
    if (param === "date") {
      sortTickets = sortByDate(filterTickets, direction);
    } else {
      sortTickets = sortTicketsByParam(filterTickets, param, direction);
    }
    filterTickets = sortTickets;
  }
  totalCount = filterTickets.length;

  if (offset !== 0) {
    offset *= TAKE_TICKETS;
  }
  let userTickets = getTicketsByOffset(filterTickets, offset);

  return { totalCount, userTickets };
};

const getTicketsByOffset = (tickets, offset) => {
  return tickets.splice(offset, TAKE_TICKETS);
};
const getTicketsBySearch = (tickets, searchQuery) => {
  let filterTicketsBySearch = tickets.filter(item => {
    return (
      item.title.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery)
    );
  });
  return filterTicketsBySearch;
};
const getTicketsByParam = (tickets, filterName, filterValue) => {
  return tickets.filter(item => {
    return Number(item[filterName]) === Number(filterValue);
  });
};
export const sortTicketsByParam = (tickets, param, direction) => {
  tickets.sort((a, b) => {
    if (a[param] === b[param]) {
      return 0;
    } else if (a[param] > b[param]) {
      return direction;
    } else {
      return direction * -1;
    }
  });
  return tickets;
};

const sortByDate = (tickets, direction) => {
  tickets.sort((a, b) => {
    let first = +a.date;
    let second = +b.date;

    if (first === second) {
      return 0;
    } else if (first - second) {
      return direction;
    } else {
      return direction * -1;
    }
  });
  return tickets;
};
