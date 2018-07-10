const path = require('path');
const express = require('express');
const socket = require('socket.io');
const server = require('http');
let app = express();
app.use(express.static(publicPath));
const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || '3000';



app.listen(port,()=>{
    console.log(`server is up on port : ${port}`);
})