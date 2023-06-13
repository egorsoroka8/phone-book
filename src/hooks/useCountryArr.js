import { useState, useEffect } from "react";
import { countries } from "../countries";

const useCountryArr = () => {
    const [countryArr, setCountryArr] = useState([]);
            
    useEffect(() => {
        const checkRussia = countries.find(el => el.countryCode === 'RU');
        const updatedCountryArr = checkRussia // на случай если России нет в массиве, и будет возвращен undefined
            ? [checkRussia, ...countries.filter(el => el.countryCode !== 'RU')] // если Россия содержится в массиве, то она добавляется на первое место
            : countries; 

        setCountryArr(updatedCountryArr);
    }, []);
    return countryArr;
};

export default useCountryArr;