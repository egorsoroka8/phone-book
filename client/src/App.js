import React, { useEffect, useState } from 'react';
import InputPhoneWrapper from './components/InputPhoneWrapper';
import PhoneList from './components/PhoneList';
import MyMessage from './components/UI/message/MyMessage';
import { useSelector } from 'react-redux';

function App() {
    const isError = useSelector((state) => state.error.isError);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isError);
    }, [isError]);

    return (
        <div className='App'>
            <h1 style={{ marginTop: 40 }}>Phone List</h1>
            <InputPhoneWrapper />
            <MyMessage isVisible={isVisible}>
                Phone is already in the list
            </MyMessage>
            <PhoneList />
        </div>
    );
}

export default App;
