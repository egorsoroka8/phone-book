import React, { useState, useEffect } from 'react';
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MyMessage from './UI/message/MyMessage';
import './styles/App.css';
import countries from '../utils/sortCountries';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL, PORT, API_PATH } from '../config/config.default';
import { getPhonesAction, addPhoneAction, removePhoneAction } from '../store/reducer';
 
const InputPhoneWrapper = () => {
    const dispatch = useDispatch();
    const [code, setCode] = useState(countries[0].phoneCode);
    const [phone, setPhone] = useState('');
    const isNumberValid = phone.length >= 3 && phone.length <= 10;

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10); // оставляет только цифры и устанавливает максимальную длину в 10 цифр
        setPhone(inputValue);
    };

    const getPhones = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}${PORT}${API_PATH}/get-phones`,
            );
            const numbers = response.data.map((el) => el.number);
            dispatch((getPhonesAction(numbers)));
        } catch (e) {
            console.error(e);
        }
    };

    const deletePhone = async () => {
        try {
            const response = await axios.delete(
                `${BASE_URL}${PORT}${API_PATH}/remove-phone`,
                {
                    data: {
                        number: `${code}${phone}`,
                    },
                }
            );
            const number = response.data;
            dispatch((removePhoneAction(number)));
        } catch (e) {
            console.error(e);
        }
    };

    const addPhone = async () => {
        try {
            const response = await axios.post(
                `${BASE_URL}${PORT}${API_PATH}/add-phone`,
                {
                    number: `${code}${phone}`,
                    country: `RU`, // Подумать как прокинуть сюда страну
                }
            );
            const addedPhone = response.data.number;
            dispatch(addPhoneAction(addedPhone));
        } catch (e) {
            console.error(e);
        }
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
