const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.name === name && user.room === room);

  if (existingUser) {
    return { error: 'user is existing' }
  }

  const user = { id, name, room };

  users.push(user);

  // console.log(user)

  return { user };

}

const removeUser = (id) => {

  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUserInRoom = (room) => { users.filter((room) => room.room == room) }

module.exports = { addUser, removeUser, getUser, getUserInRoom } 