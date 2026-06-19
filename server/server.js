
import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import socketHandler from "./socket/socket.js";

const server = http.createServer(app);

const io = new Server(server,{

    cors:{
        origin:"http://localhost:5173"
    }

});

socketHandler(io);

server.listen(5000,()=>{

console.log("Server Running");

});
