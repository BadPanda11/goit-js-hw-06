import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .sort()
    .filter((user, i, users) => user !== users[i + 1]);
};
console.log(getSortedUniqueSkills(users));
