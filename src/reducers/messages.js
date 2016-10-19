/*
  Messages: [] => Array of messages that we will store
  When a user leaves the chat, we will purge their messages
*/
const messages = (state = [], action) => {
  switch (action.type) {
    case 'MESSAGE:ADD':
      return [
        ...state,
        action.message
      ]
    case 'USER:REMOVE':
      return state.filter(function(i){return i.user_id !== action.user.id});
    default:
      return state
  }
}

module.exports = messages;
