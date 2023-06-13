import React, { useState, useEffect } from "react";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyMessage from "./components/UI/message/MyMessage";
import './components/styles/App.css'
import sortCountries from "./utils/sortCountries";
import useButtonEnable from "./hooks/useValidation";


function App() {
  const countries = sortCountries();

  const [code, setCode] = useState(countries[0].phoneCode);
  const [phone, setPhone] = useState('');
  
  return (
    <div className="App">
      <h1 style={{ marginTop: 20 }}>Add Number</h1>
      <MySelect
        props={countries}
        onChange={e => setCode(e.target.value)}
        value={code}
      />
      <MyInput
        placeholder='Type your phone'
        type='text'
        onChange={e => setPhone(e.target.value)}
        value={phone}
      />
      <MyMessage />
      <MyButton 
        onClick={console.log(code + phone)}
      >Submit
      </MyButton>
    </div>
  );
}

export default App;
