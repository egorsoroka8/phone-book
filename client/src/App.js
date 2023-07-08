import React from "react";
import InputPhoneWrapper from "./components/InputPhoneWrapper";
import PhoneList from "./components/PhoneList";
import { io } from 'socket.io-client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPhones, deletePhone, addPhone } from './api/index'


function App() {

  const dispatch = useDispatch();

  const socket = io('http://localhost:5050');
  useEffect(() => {
    dispatch(getPhones());
  }, []);

      // Event listeners for the socket
      socket.on('addPhone', (data) => {
        console.log(`Phone ${data.number} has been added to a list`);
      });
  
      socket.on('removePhone', (data) => {
        console.log(`Phone ${data} has been removed from a list`);
      });
  
  return (
    <div className="App">
      <h1 style={{marginTop:40}}>Add Phone Number</h1>
      <InputPhoneWrapper />
      <PhoneList />
    </div>
  );
}

export default App;
