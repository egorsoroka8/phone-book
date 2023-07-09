import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPhones, addPhone } from '../api/index';
import countries from '../utils/sortCountries';
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import './styles/App.css';

const InputPhoneWrapper = () => {
    const dispatch = useDispatch();
    const [code, setCode] = useState(countries[0].phoneCode);
    const [phone, setPhone] = useState('');
    const isNumberValid = phone.length >= 3 && phone.length <= 10;

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10);
        setPhone(inputValue);
    };

    useEffect(() => {
        dispatch(getPhones());
    });

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
            <MyButton
                style={{ width: '200px' }}
                disabled={!isNumberValid}
                onClick={() => {
                    dispatch(addPhone(code, phone), setPhone(''));
                }}
            >
                Submit
            </MyButton>
        </div>
    );
};

export default InputPhoneWrapper;
