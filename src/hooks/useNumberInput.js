import { useState } from 'react';

const useNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNumberValid, setNumberValid] = useState(false);

  const handlePhoneNumberChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    inputValue = inputValue.slice(0, 10); // Limit to 10 digits
    setPhoneNumber(inputValue);

    const isValid = inputValue.length >= 3 && inputValue.length <= 10;
    setNumberValid(isValid);
  };

  return { phoneNumber, isNumberValid, handlePhoneNumberChange };
};

export default useNumberInput;