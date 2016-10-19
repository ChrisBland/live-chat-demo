import {addUser, addUsers, removeUser, addMessage} from "../actions";

const Socket = {
  newMessage: function(msg){
    this.socket.emit('new:message', msg);
  },

  handleSocketEvents: function(dispatch, socket) {
    this.socket = socket;

    socket.on('USER:ADD', function(userName){
      dispatch(addUser(userName));
    });  

    socket.on('USERS:INIT', function(users){
      dispatch(addUsers(users));
    }); 

    socket.on('MESSAGE:ADD', function(message){
      dispatch(addMessage(message));
    }); 

    socket.on('USER:REMOVE', function(user){
      dispatch(removeUser(user));
    }); 
  }
}

module.exports = Socket;
