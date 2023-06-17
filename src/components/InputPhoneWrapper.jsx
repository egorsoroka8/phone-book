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
    const phones = useSelector(state => state);
    const countries = sortCountries(); // возвращает сортированный массив стран (проверяет что первая страна Россия)
    const [code, setCode] = useState(countries[0].phoneCode);
    const [phone, setPhone] = useState('');
    const isNumberValid = phone.length >= 3 && phone.length <= 10;


    const handlePhoneChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10) // оставляет только цифры и устанавливает максимальную длину в 10 цифр
        setPhone(inputValue);
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