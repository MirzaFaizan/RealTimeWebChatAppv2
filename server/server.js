const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
let app = express();

let port = process.env.PORT || '3000';

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log("server is up on port 3000");
})