var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var faker = require('faker');
require("nodejs-dashboard");

/*
  This is SIMPLE / half-baked server for Dev/Testing - 
  users / connections should be stored somewhere
  like redis so that all our servers are stateless. This project was created mostly
  as a UI / UX spike so the server here leaves much to be done.
  Ideally you will impl some form of auth / user registraion etc...
*/
var sockets = [];

/*
  Create a list of fake users and prepopulate
*/
var users = [{
  userName: 'B44',
  avatar: faker.internet.avatar(),
  id: 'B44',
  isStaff: true,
  user_id: 'B44'
}];

function addUser(user){
  users.push(user);
  emitToSockets('USER:ADD', user);
}

function removeUser(user){
  splice(users, user);
  emitToSockets('USER:REMOVE', user);
}

function emitToSockets(type, obj){
  sockets.forEach(function(socket){
    socket.emit(type, obj);
  });
}

io.on('connection', function(socket){
  socket.emit('USERS:INIT', users);
  sockets.push(socket);
  handleSocket(socket);
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

function newMessage(message){
  message.id = faker.random.uuid();
  message.create_date = new Date();
  emitToSockets('MESSAGE:ADD', message);
}

function handleSocket(socket){
  socket.on('new:message', newMessage)
}

addUser(createUser());


/*
  Making it look like we have a popular web chat app to test.
*/
setInterval(function(){
  addUser(createUser());
}, 2500);

setInterval(function(){
  saySomething();
}, 1500);


/*
  For testing, method gets a random user and then has them say something
*/
function saySomething(){
  var user = getRandomUser();
  if(!user) return;
  var msg = {
    user_id: user.id,
    id: faker.random.uuid(),
    create_date: new Date()
  };

  if(faker.random.boolean() && faker.random.boolean()){
    msg.type = 'rich';
    msg.message =  faker.lorem.sentence();
    msg.image = faker.image.imageUrl();
  }else{
    msg.type = 'text';
    msg.message =  faker.lorem.sentence();
  }
  emitToSockets('MESSAGE:ADD', msg);
}

setInterval(function(){
  removeUser(getRandomUser());
}, 3500);


/*
  For testing, use Faker to create usernames / avatars
*/
function createUser(){
  return {
    userName: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: faker.random.uuid(),
    isStaff: faker.random.boolean() && faker.random.boolean()
  }
}

function getRandomUser(){
  return users[Math.floor(Math.random()*users.length)];
}

function splice(arr, val) {
  for (var i = arr.length; i--;) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
}