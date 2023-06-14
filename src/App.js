import React, { useState } from "react";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyMessage from "./components/UI/message/MyMessage";
import './components/styles/App.css'
import sortCountries from "./utils/sortCountries";


function App() {
  const countries = sortCountries();

  const [code, setCode] = useState(countries[0].phoneCode);
  const [phone, setPhone] = useState('');
  const [isNumberValid, setNumberValid] = useState(false);

  
  const handlePhoneChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    inputValue = inputValue.slice(0, 10); // Limit to 10 digits
    setPhone(inputValue);

    const isValid = inputValue.length >= 3 && inputValue.length <= 10;
    setNumberValid(isValid);
  };

  const handleSubmit = () => {
    console.log(code + phone);
  };
  
  return (
    <div className="App">
      <h1 style={{ marginTop: 20 }}>Add Number</h1>
      <MySelect
        props={countries}
        onChange={e => setCode(e.target.value)}
        value={code}
      />
      <MyInput
        placeholder='Type phone'
        type='text'
        onChange={handlePhoneChange}
        value={phone}
      />
      <MyMessage />
      <MyButton
        disabled={!isNumberValid}
        onClick={handleSubmit}
      >Submit
      </MyButton>
    </div>
  );
}

export default App;
