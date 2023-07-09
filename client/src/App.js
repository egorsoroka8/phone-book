import React from 'react';
import InputPhoneWrapper from './components/InputPhoneWrapper';
import PhoneList from './components/PhoneList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPhones, deletePhone, addPhone } from './api/index';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhones());
    }, []);

    return (
        <div className='App'>
            <h1 style={{ marginTop: 40 }}>Phone List</h1>
            <InputPhoneWrapper />
            <PhoneList />
        </div>
    );
}

export default App;
