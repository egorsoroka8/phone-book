const { Server } = require('socket.io');

class SocketManager {
    static io;

    static init(server) {
        SocketManager.io = new Server(server, {
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
            },
        });
    }

    static addPhone(phone) {
        SocketManager.io.sockets.emit('addPhone', phone);
        console.log(`Phone ${phone} has been added to a list`);
    }
    
    static removePhone(phone) {
        SocketManager.io.sockets.emit('removePhone', phone);
        console.log(`Phone ${phone} has been removed from a list`);
    }
}

module.exports = SocketManager;

// 1. написать класс обработчик
// 2. импортировть его в индекс и в контроллеры
// 3. сделать обработку в клиент
