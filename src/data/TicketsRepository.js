export const getTickets = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return user.tickets;
};

export const paginationTickets = (offset, take) => {
  let tickets = getTickets();
  let totalCount = tickets.length;
  tickets.sort((a, b) => {
    return a.id - b.id;
  });

  console.log(tickets);
  return { totalCount, tickets };
};
