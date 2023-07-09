import { addPhoneAction } from '../store/reducer';
import axios from 'axios';
import { BASE_URL, BASE_PORT, API_PATH } from '../config/config.default';

const addPhone = (code, phone) => {
    return function (dispatch) {
        axios
            .post(`${BASE_URL}${BASE_PORT}${API_PATH}/add-phone`, {
                number: `${code}${phone}`,
            })
            .then((response) => dispatch(addPhoneAction(response.data.number)))
            .catch((error) => {
                console.error(error);
            });
    };
};

export default addPhone;
