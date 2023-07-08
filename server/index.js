require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const SocketManager = require('./socket');

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const server = createServer(app);
SocketManager.init(server);

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Handle WebSocket messages
//     socket.on('message', (message) => {
//         console.log('Message:', message);

//         socket.on('addPhone', (message) => {
//             console.log('Phone has been added to list');
//         });

//         socket.on('removePhone', (message) => {
//             console.log('Phone has been removed from list');
//         });
//     });

//     // Handle WebSocket connection close
//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });
// });

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        server.listen(PORT, () =>
            console.log(`Server has started on port ${PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
