export const calcTotalPrice = (items) =>
  items.reduce((acc, curr) => (acc += curr.price), 0);
