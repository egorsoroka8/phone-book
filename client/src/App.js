import React from "react";
import InputPhoneWrapper from "./components/InputPhoneWrapper";
import PhoneList from "./components/PhoneList";


function App() {

  return (
    <div className="App">
      <h1 style={{marginTop:40}}>Add Phone Number</h1>
      <InputPhoneWrapper />
      <PhoneList />
    </div>
  );
}

export default App;
