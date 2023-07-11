import React from 'react';

const MyMessage = ({ children, isVisible }) => {
    return (
        <h3 style={{ visibility: isVisible ? 'visible' : 'hidden', color: 'red' }}>
            {children}
        </h3>
    );
};

export default MyMessage;
