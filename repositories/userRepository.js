// repositories/userRepository.js
let users = []; // Base en mémoire

const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

const createUser = (user) => {
  users.push(user);
  return user;
};

module.exports = {
  findUserByUsername,
  createUser,
  users
};
