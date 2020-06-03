import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((counter, user) => counter + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
