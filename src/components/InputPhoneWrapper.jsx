import React, { useState } from "react";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyMessage from "./UI/message/MyMessage";
import './styles/App.css'
import sortCountries from "../utils/sortCountries";

const InputPhoneWrapper = () => {

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
        <div>
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
    )
}

export default InputPhoneWrapper;