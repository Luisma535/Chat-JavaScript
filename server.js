const express = require('express');
const app = express();
const port = 7000;
const server = app.listen(port,()=>console.log(`http://localhost:${port}`));
const io = require('socket.io')(server);
require('./controllers/sockets')(io)
app.use(express.static('public'))

