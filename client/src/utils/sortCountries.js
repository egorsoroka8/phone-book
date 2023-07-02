import countriesData from '../config.default.json'

const sortCountries = () => {
    const checkRussia = countriesData.find(el => el.countryFlag === 'RU');
        const updatedCountryArr = checkRussia // на случай если России нет в массиве, и будет возвращен undefined
            ? [checkRussia, ...countriesData.filter(el => el.countryFlag !== 'RU')] // если Россия содержится в массиве, то она добавляется на первое место
            : countriesData;

    return updatedCountryArr;
};

const countries = sortCountries();

export default countries;


