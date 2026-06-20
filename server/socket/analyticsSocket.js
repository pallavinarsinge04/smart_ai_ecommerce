import { Server } from "socket.io";

export const initAnalyticsSocket = (server) => {
    const io = new Server(server, {
        cors: { origin: "http://localhost:5173" }
    });

    io.on("connection", (socket) => {
        console.log("Analytics User Connected");

        // LIVE METRICS EMISSION
        setInterval(() => {
            socket.emit("analytics:update", {
                revenue: Math.floor(Math.random() * 50000),
                activeUsers: Math.floor(Math.random() * 500),
                orders: Math.floor(Math.random() * 100)
            });
        }, 3000);

        socket.on("disconnect", () => {
            console.log("Analytics User Disconnected");
        });
    });

    return io;
};