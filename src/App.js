import React, { useState, useEffect } from "react";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyMessage from "./components/UI/message/MyMessage";
import './components/styles/App.css'
import useCountryArr from "./hooks/useCountryArr";


function App() {
  const countries = useCountryArr();

  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');

  const addNewPhone = () => {
    console.log(code)
  }


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
      <MyButton onClick={addNewPhone}>Submit</MyButton>
    </div>
  );
}

export default App;

  // const makeFullNumber = (e) => {
  //   e.preventDefault();
  //   const fullNumber = {
  //     code,
  //     phone
  //   }
  // }