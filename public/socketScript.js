var socket = io();
socket.on('connect',()=>{
    console.log("connected to server");
});


socket.on('disconnected',()=>{
    console.log("connected to server");
});

//on new E-mail

socket.on('newEmail',(email)=>{
    console.log(`new Email : ${JSON.stringify(email,undefined,10)}`);
})