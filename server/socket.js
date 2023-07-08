const { Server } = require('socket.io');

class SocketManager {
    static io;
    static socket;

    static init(server) {
        SocketManager.io = new Server(server, {
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
            },
        });
        return SocketManager.io;
    }

    static get() {
        return SocketManager.io;
    }

    static conversation() {
        SocketManager.io.on('connection', (socket) => {
            console.log('A user connected');
            SocketManager.socket = socket;

            socket.emit('addPhone', (phone) => {
                console.log(`Phone ${phone} has been added to list`);
            });

            socket.emit('removePhone', (phone) => {
                console.log(`Phone ${phone} has been removed from list`);
            });

            socket.on('disconnect', () => {
                console.log('A user disconnected');
            });
            return SocketManager.socket
        });
    }
}

module.exports = SocketManager;

// 1. написать класс обработчик
// 2. импортировть его в индекс и в контроллеры
// 3. сделать обработку в клиенте

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Handle WebSocket messages
//     socket.on('message', (message) => {
//         console.log('Message:', message);

//     // Broadcast the message to all connected clients
//     socket.emit('message', message);
//     });

//     // Handle WebSocket connection close
//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });
// });
