
const User = function(name) {

  this.name = name;
  this.chatroom = null;
}
User.prototype = {

  send: function(message, to) {

    this.chatroom.send(message, this, to);
  },
  recieve: function(message, frm) {

    console.log(`${frm.name} to ${this.name}: ${message}`);
  }  
}

const Chatroom = function() {

  const users = {};

  return {

    register: function(user) {

      users[user.name] = user;
	  user.chatroom = this; // "this" reffers to the current chatroom
    },
    send: function(message, frm, to) {

      if(to) {
        // message to one user
        to.recieve(message, frm)
      }
      else {
        // message to the whole chatroom
        for(key in users) {

          if(users[key] !== frm) {

            users[key].recieve(message, frm)
          }
        }
      }
    }
  }
}

const phil = new User('Phil');
const james = new User('James');
const ana = new User('Ana');

chatRoom = new Chatroom();

chatRoom.register(phil);
chatRoom.register(james);
chatRoom.register(ana);