import { countries } from "../countries";

const sortCountries = () => {
    const checkRussia = countries.find(el => el.countryCode === 'RU');
        const updatedCountryArr = checkRussia // на случай если России нет в массиве, и будет возвращен undefined
            ? [checkRussia, ...countries.filter(el => el.countryCode !== 'RU')] // если Россия содержится в массиве, то она добавляется на первое место
            : countries;

    return updatedCountryArr;
};

export default sortCountries;


