var socket = io();
socket.on('connect',()=>{
    console.log("connected to server");


});


socket.on('disconnected',()=>{
    console.log("connected to server");
});

//on a new arrived chat message

socket.on('chatMessage',(email)=>{
    console.log(`new Email`,email);
});