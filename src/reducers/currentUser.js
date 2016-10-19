/*
  Current User State:
    Name: What is the username of the current user
    user_id: what is the uuid of the user
    IsSigned In: => Reserved for future use.
*/
import uuid from 'node-uuid';

const currentUser = (state = {name: 'B44', user_id: 'B44', isSignedIn: false}, action) => {
  switch (action.type) {
    case 'USER:SEED':
      return Object.assign({}, state, action.user);
    case 'USER:SIGN_IN':
      return Object.assign({}, state, {name: action.name, user_id: uuid.v1(), isSignedIn: true});
    default:
      return state
  }
}

module.exports = currentUser;
