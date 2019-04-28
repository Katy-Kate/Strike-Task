const TAKE_TICKETS = 10;

export const getTickets = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("---------", user);
  let tickets = user ? user.tickets : [];
  return tickets;
};

export const paginationTickets = offset => {
  let tickets = getTickets();
  let totalCount = tickets.length;
  tickets.sort((a, b) => {
    return a.id - b.id;
  });
  let renderTickets = tickets.slice(offset, TAKE_TICKETS);
  console.log(renderTickets);
  return { totalCount, renderTickets };
};
