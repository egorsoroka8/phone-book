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
