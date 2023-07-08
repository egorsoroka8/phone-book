import { io } from 'socket.io-client';
import { BASE_URL, BASE_PORT } from './config/config.default'

const URL_AND_PORT = BASE_URL + BASE_PORT

export const socket = io('http://localhost:5050/api');