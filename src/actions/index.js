"use strict";
function addUser(user){
  return {
    type: 'USER:ADD',
    user: user
  };
}

function addMessage(msg){
  return {
    type: 'MESSAGE:ADD',
    message: {
      user_id: msg.user_id,
      body: msg.message,
      type: msg.type,
      id: msg.id,
      create_date: msg.create_date,
      image: msg.image
    }
  };
}

function updateSetting(settingName, settingValue){
  return {
    type: 'SETTINGS:UPDATE',
    settingName,
    settingValue
  };
}

function selectTab(tabName){
  return {
    type: 'MENU:SELECT_TAB',
    tabName: tabName
  };
}

function addUsers(users){
  return {
    type: 'USERS:INIT',
    users: users
  };
}

function removeUser(user){
  return {
    type: 'USER:REMOVE',
    user: user
  };
}


module.exports = {
  addUser,
  updateSetting,
  addUsers,
  selectTab,
  removeUser,
  addMessage
};
