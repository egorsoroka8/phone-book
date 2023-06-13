import { useState } from 'react';

const useButtonEnable = () => {
    const [buttonEnable, setButtonEnable] = useState(false);

    const checkNumberLength = (e) => {
        const inputValue = e.target.value;
        const isValid = inputValue.length >= 3 && inputValue.length <= 10;
        setButtonEnable(isValid);
    };

  return buttonEnable;
};

export default useButtonEnable;

