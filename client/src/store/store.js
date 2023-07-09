import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { io } from 'socket.io-client';
import { addPhoneAction, removePhoneAction } from '../store/reducer';

const store = configureStore({ reducer }, applyMiddleware(thunk));

const socket = io('http://localhost:5050');

socket.on('addPhone', (data) => {
    store.dispatch(addPhoneAction(data));
    console.log(`Phone ${data} has been added to a list`);
});

socket.on('removePhone', (data) => {
    store.dispatch(removePhoneAction(data));
    console.log(`Phone ${data} has been removed from a list`);
});

socket.on('connect', () => {
    console.log(socket.id);
});

export default store;
