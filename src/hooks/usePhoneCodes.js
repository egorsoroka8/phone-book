import { useState, useEffect } from "react";
import { countries } from "../countries";

const usePhoneCodes = () => {
    const [phoneCode, setPhoneCode] = useState([]);
            
    useEffect(() => {
        const checkRussia = countries.find(el => el.countryCode === 'RU');
        const updatedCountryArr = checkRussia // на случай если России нет в массиве, и будет возвращен undefined
            ? [checkRussia, ...countries.filter(el => el.countryCode !== 'RU')] // если Россия содержится в массиве, то она добавляется на первое место
            : countries; 

        setPhoneCode(updatedCountryArr);
    }, []);
    return phoneCode;
};

export default usePhoneCodes;