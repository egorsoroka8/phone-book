import React from "react";
import InputPhoneWrapper from "./components/InputPhoneWrapper";
import PhoneList from "./components/PhoneList";
import { io } from 'socket.io-client';
import { useEffect } from "react";


function App() {

  const socket = io('http://localhost:5050');
  useEffect(() => {

    // Event listeners for the socket
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    // Clean up the socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1 style={{marginTop:40}}>Add Phone Number</h1>
      <InputPhoneWrapper />
      <PhoneList />
    </div>
  );
}

export default App;
