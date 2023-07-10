import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import thunk from 'redux-thunk';
import { io } from 'socket.io-client';
import { removePhoneAction } from './phoneReducer';
import { getPhones } from '../api';

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

const socket = io('http://localhost:5050');

socket.on('addPhone', () => {
    store.dispatch(getPhones());
});

socket.on('removePhone', (data) => {
    store.dispatch(removePhoneAction(data));
});

export default store;
