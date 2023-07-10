import { getPhonesAction } from '../store/phoneReducer';
import axios from 'axios';
import { BASE_URL, BASE_PORT, API_PATH } from '../config/config.default';

const getPhones = () => {
    return function (dispatch) {
        axios
            .get(`${BASE_URL}${BASE_PORT}${API_PATH}/get-phones`)
            .then((response) => {
                const numbers = response.data.map((el) => el.number);
                dispatch(getPhonesAction(numbers));
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export default getPhones;
