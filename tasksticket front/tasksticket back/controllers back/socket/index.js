
  /*const socket = require("socket.io");
  const { Server } = require("socket.io");


const socket = (io) => {

    io.on('connection', socket => {

        console.log('new connection'); 
        
		socket.on('disconnect', () => console.log('disconnected')); 
		
	})
}
module.exports = { app, io };      //<------ 
