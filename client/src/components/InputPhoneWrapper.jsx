import React, { useState, useEffect } from 'react';
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MyMessage from './UI/message/MyMessage';
import './styles/App.css';
import countries from '../utils/sortCountries';
import { useDispatch } from 'react-redux';
import getPhones from '../api/getPhones'
import addPhone from '../api/addPhone'
import deletePhone from '../api/deletePhone'
 
const InputPhoneWrapper = () => {
    const dispatch = useDispatch();
    const [code, setCode] = useState(countries[0].phoneCode);
    const [phone, setPhone] = useState('');
    const isNumberValid = phone.length >= 3 && phone.length <= 10;

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10); // оставляет только цифры и устанавливает максимальную длину в 10 цифр
        setPhone(inputValue);
    };

    useEffect(() => {
        getPhones();
    }, []);

    return (
        <div className='InputWrapper'>
            <MySelect
                props={countries}
                onChange={(e) => setCode(e.target.value)}
                value={code}
            />
            <MyInput
                placeholder='Type phone'
                type='text'
                onChange={handlePhoneChange}
                value={phone}
            />
            {/* <MyMessage onChange={message}>{message}</MyMessage> */}
            <MyButton disabled={!isNumberValid} onClick={addPhone}>
                Submit
            </MyButton>
            <MyButton disabled={false} onClick={deletePhone}>
                Delete
            </MyButton>
        </div>
    );
};

export default InputPhoneWrapper;
