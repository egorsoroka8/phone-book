const { Server } = require('socket.io');


// сделать статический класс который будет хранить в себе значение сокет сервера
// импортировать его в индекс.js


class SocketManager {
    static io;
    static init(server) {
        SocketManager.io = new Server(server, {
        cors: {
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST']
        }
      });
      return SocketManager.io;
    }
    
    static get() {
        if (!SocketManager.io) {
            throw new Error('Socket is not initialized');
        }
      return SocketManager.io;
    }
  }
  
  module.exports = SocketManager;


// перенести внутрь метода класса 
const emitMessage = async (data) => {
    io.emit('addPhone', data)
}

// 1. написать класс обработчик
// 2. импортировть его в индекс и в контроллеры
// 3. сделать обработку в клиенте