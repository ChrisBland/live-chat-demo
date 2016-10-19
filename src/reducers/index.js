import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import currentUser from './currentUser';
import menu from './menu';
import settings from './setting';

const chatApp = combineReducers({
  messages,
  users,
  currentUser,
  menu,
  settings
});

export default chatApp;
