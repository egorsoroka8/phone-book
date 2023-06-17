import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  phones : [],
};


const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_PHONE':
      return {
        ...state,
        phones: [...state.phones, action.payload],
      };
    case 'GET_PHONES':
      return state
    default:
      return state;
  }
};

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)


