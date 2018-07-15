const path = require('path');
const express = require('express');
const socket = require('socket.io');
const http = require('http');
//port
const port = process.env.PORT || '3000';
//app
let app = express();
//path
const publicPath = path.join(__dirname, '../public');
//middleware static setup
app.use(express.static(publicPath));
//creatin server
let server = http.createServer(app);

//returns IO server
let io = socket(server);

io.on('connection',(socket)=>{
    console.log('new user connected');

    //welcome new user
    socket.emit('newMessage',{
        from:'admin',
        to:'new user',
        message:'welcome to the chat application',
    });
    
    //notify other users
    socket.broadcast.emit('newMessage',{
        from:'admin',
        to:'everyone',
        message:'new user arrived',
    })
    


    // recieve and braodcast message

    socket.on('createMessage',(message)=>{
        // io.emit('newMessage',{
        //     from:message.from,
        //     to:message.to,
        //     message:message.message,
        // });
        socket.broadcast.emit('newMessage',{
                from:message.from,
                to:message.to,
                message:message.message,
            });
    });

    // on disconnect
    socket.on('disconnect',()=>{
        console.log('user was disconnected');
    });

});//io Server connection end here



server.listen(port,()=>{
    console.log(`server is up on port : ${port}`);
});
 

