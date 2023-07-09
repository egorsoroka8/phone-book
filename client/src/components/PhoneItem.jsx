import React from 'react';
import './styles/App.css';
import MyButton from './UI/button/MyButton';
import { deletePhone } from '../api/index';
import { useDispatch } from 'react-redux';

const PhoneItem = ({ phone, index }) => {
    const dispatch = useDispatch();

    return (
        <div className='PhoneItem'>
            <div className='PhoneItem-left'>
                <div style={{ marginRight: '10px' }} key={`index-${index}`}>
                    {index + 1}
                </div>
                <div key={`phone-${index}`}>{phone}</div>
            </div>
            <MyButton
                key={`button-${index}`}
                disabled={false}
                onClick={() => dispatch(deletePhone(phone))}
            >
                Delete
            </MyButton>
        </div>
    );
};

export default PhoneItem;
