
import http from "http";

import app from "./app.js";

import {initializeSocket}

from "./socket/socket.js";

const server=http.createServer(app);

initializeSocket(server);

server.listen(5000,()=>{

console.log("Server Running");

});

