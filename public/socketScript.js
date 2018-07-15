var socket = io();
socket.on('connect',()=>{
    console.log("connected to server");

    socket.emit('createMessage',{
        to:'faizan',
        from:'ahmed',
        message:'how are you?'
    })


});


socket.on('disconnected',()=>{
    console.log("connected to server");
});

//on a new arrived chat message

socket.on('newMessage',(message)=>{
    console.log(`New Message from ${message.from}`,message);
});