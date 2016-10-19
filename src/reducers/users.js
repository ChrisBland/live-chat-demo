const users = (state = [], action) => {
  switch (action.type) {
    case 'USER:ADD':
      return [
        ...state,
        action.user
      ]
    case 'USERS:INIT':
      return action.users;
    case 'USER:REMOVE':
      return state.filter((item) => item.userName !== action.user.userName);
    default:
      return state
  }
}

module.exports = users;
