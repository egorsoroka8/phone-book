import React, { useState } from "react";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MyMessage from "./UI/message/MyMessage";
import './styles/App.css'
import sortCountries from "../utils/sortCountries";
import { useDispatch, useSelector } from "react-redux";

const InputPhoneWrapper = () => {

    const dispatch = useDispatch();
    const phones = useSelector(state => state)
    console.log(phones)

    const countries = sortCountries(); // возвращает сортированный массив стран (проверяет что первая страна Россия)

    const [code, setCode] = useState(countries[0].phoneCode);
    const [phone, setPhone] = useState('');
    const [isNumberValid, setNumberValid] = useState(false);


    const handlePhoneChange = (e) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/g, ''); // удаляет все не цифры
        inputValue = inputValue.slice(0, 10); // устанавливает максимальный лимит по длине номера
        setPhone(inputValue);

        const isValid = inputValue.length >= 3 && inputValue.length <= 10;
        setNumberValid(isValid);
    };

    const addPhone = () => {
        dispatch({type: 'ADD_PHONE', payload : code + phone})
    };

    return (
        <div className="InputWrapper">
            <h1>Add Number</h1>
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
                onClick={addPhone}
            >Submit
            </MyButton>
        </div>
    )
}

export default InputPhoneWrapper;