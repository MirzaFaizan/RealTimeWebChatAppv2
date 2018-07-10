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
    
    io.on('disconnected',()=>{
        console.log('user was disconnected');
    })
});



server.listen(port,()=>{
    console.log(`server is up on port : ${port}`);
});
 

