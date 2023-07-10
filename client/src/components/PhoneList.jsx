import React from 'react';
import { useSelector } from 'react-redux';
import './styles/App.css';
import PhoneItem from './PhoneItem';

const PhoneList = () => {
    const { numbers } = useSelector((state) => state.contactNumbers);
    const isPhonesAdded = numbers.length ? 'Added Phones' : 'No added phones';

    return (
        <div className='PhoneList'>
            <h4 style={{ marginBottom: 20 }}>{isPhonesAdded}</h4>

            {numbers.map((phone, index) => (
                <PhoneItem
                    key={`phoneIyem-${index}`}
                    phone={phone}
                    index={index}
                />
            ))}
        </div>
    );
};

export default PhoneList;
