import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reducer from './reducer'
import thunk from "redux-thunk";

const store = configureStore({ reducer }, applyMiddleware(thunk));

// создать тут клиентский сокет
// диспатчить 

export default store;