import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyMessage = () => {
    const isError = useSelector((state) => state.error.isError);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isError);
    }, [isError]);

    return (
        <h3 style={{ visibility: isVisible ? 'visible' : 'hidden', color: 'red' }}>
            Phone is already in the list!
        </h3>
    );
};

export default MyMessage;
