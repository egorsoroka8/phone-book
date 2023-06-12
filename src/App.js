import React from "react";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import './components/styles/App.css'
import MyInput from "./components/UI/input/MyInput";
import MyMessage from "./components/UI/message/MyMessage";
import useNumberInput from "./hooks/useNumberInput";

function App() {

  const { number, isNumberValid, handleNumberChange, handleKeyDown } = useNumberInput();

  return (
    <div className="App">
        <h1 style={{marginTop: 20}}>Add Number</h1>
        <MySelect/>
        <MyInput value={number} onChange={handleNumberChange} onKeyDown={handleKeyDown}/>
        <MyMessage/>
        <MyButton disabled={!isNumberValid}>Add phone</MyButton>
    </div>
  );
}

export default App;
