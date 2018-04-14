var socket = io();
    socket.on('connect',function(){

        console.log('connected to server');
        socket.emit('createMessage',{
            from:'rehan@gmail.com',
            text:'kaise ho bhai jaan'


        })
       
    });
    socket.on('disconnect',function(){
        console.log('discoonected from server');
    });
   socket.on('newMessage',function(message){
console.log('newMessage',message);
   })