import { useState } from 'react';

const useNumberInput = () => {
  const [number, setNumber] = useState('');
  const [isNumberValid, setNumberValid] = useState(false);

  const handleNumberChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    inputValue = inputValue.slice(0, 10); // Limit to 10 digits
    setNumber(inputValue);

    const isValid = inputValue.length >= 3 && inputValue.length <= 10;
    setNumberValid(isValid);
  };

  const handleKeyDown = (e) => {
    if (
      !(
        (e.key === 'ArrowLeft' || e.key === 'ArrowRight') ||
        (e.target.selectionStart === 0 && e.key !== 'Backspace') ||
        (e.target.selectionStart === number.length && e.key !== 'Delete') ||
        (e.key === 'Backspace' && e.target.selectionStart !== e.target.selectionEnd)
        // нужно условие чтобы можно было удалить цифры из середины номера
      ) &&
      (e.key === '.' ||
        e.key === '-' ||
        e.key === '+' ||
        !/\d/.test(e.key) ||
        number.length >= 10)
    ) {
      e.preventDefault(); // Prevent typing non-digit characters or exceeding 10 digits
    }
  };

  return { number, isNumberValid, handleNumberChange, handleKeyDown };
};

export default useNumberInput