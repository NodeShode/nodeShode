const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

var app=express();
var server =http.createServer(app); 
var io=socketIO(server);
const port=process.env.PORT || 3000;

const publicpath=path.join(__dirname,'../public');

app.use(express.static(publicpath));
io.on('connection',(socket)=>{
   
    console.log('New connection from ' +  socket.request.connection.remoteAddress+'---'+socket.request.connection.remotePort);
    socket.on('disconnect',()=>{
        console.log('User was Disconnected'+socket.request.connection.remoteAddress+'---'+socket.request.connection.remotePort);
    });

   socket.emit('newMessage',{
       form:'Atul',
       text:'new message h bhai',
       createdAt:2453
   })
  
    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    });
})
server.listen(port,()=>{
    console.log(`server started on  ${port}`);
});


