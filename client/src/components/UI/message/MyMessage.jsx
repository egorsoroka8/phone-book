import React, { useState } from "react";

const MyMessage = () => {

    const [isVisible, setIsVisible] = useState(false);
    // Function to handle the action that triggers the visibility of the message
    const handleAction = () => {
      // Perform the necessary action
      // Set the visibility of the message to true
      setIsVisible(true);
    };
    
    return (
        <h6 style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            Error
        </h6>
    )
}

export default MyMessage;