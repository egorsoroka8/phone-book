import React from 'react';
import InputPhoneWrapper from './components/InputPhoneWrapper';
import PhoneList from './components/PhoneList';
import MyMessage from './components/UI/message/MyMessage'

function App() {

    return (
        <div className='App'>
            <h1 style={{ marginTop: 40 }}>Phone List</h1>
            <InputPhoneWrapper />
            <MyMessage />
            <PhoneList />
        </div>
    );
}

export default App;
