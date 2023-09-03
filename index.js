const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(cors({
    origin: '*'
}));

app.get('/api', (req, res) => {
    // console.log("data");
    return res.json("hello")
//   res.sendFile(__dirname + '/index.html');
});
var socketArr = []
io.on('connection', (socket) => {
  console.log('a user connected',socket.id);

  var latLong
  var count = 0
  socket.on('getUserLatLong', (newMessage)=>{
    console.log(newMessage);
    //  console.log(index);
    //  newMessage["count"] = count++
//     if (newMessage.SocketId != undefined ) {
//       var index = socketArr.find((itme)=> itme.SocketId == newMessage.SocketId)
//       socketArr[index] = newMessage
//     }else{
      
//     newMessage["SocketId"] = socket.id
//   io.emit('createSocketId', newMessage);
//   socketArr.push(newMessage)

// }
    // console.log('newMessage', socketArr);
    // latLong = newMessage
    // console.log(newMessage);
    io.emit('get_msg', newMessage);
    // console.log(socket.broadcast.emit('get_msg',latLong),latLong);
    // socket.broadcast.to(socket.id).emit('get_msg',latLong);
  })
//   socket.broadcast.emit("getLatLong", latLong);
  
});



server.listen(8080, () => {
  console.log('listening on *:3000');
});