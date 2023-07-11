import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import thunk from 'redux-thunk';
import { io } from 'socket.io-client';
import { removePhoneAction } from './phoneReducer';
import { getPhones } from '../api';
import { BASE_URL, BASE_PORT } from '../config/config.default'

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

const socket = io(`${BASE_URL}${BASE_PORT}`);

socket.on('addPhone', () => {
    store.dispatch(getPhones());
});

socket.on('removePhone', (data) => {
    store.dispatch(removePhoneAction(data));
});

socket.on('connect', (data) => {
    store.dispatch(removePhoneAction(data));
});

export default store;
