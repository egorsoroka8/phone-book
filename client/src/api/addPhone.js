import { addPhoneAction } from '../store/phoneReducer';
import axios from 'axios';
import { BASE_URL, BASE_PORT, API_PATH } from '../config/config.default';
import { phoneExistAction } from '../store/errorReducer';

const addPhone = (code, phone) => {
    return function (dispatch) {
        axios
            .post(`${BASE_URL}${BASE_PORT}${API_PATH}/add-phone`, {
                number: `${code}${phone}`,
            })
            .then((response) => {
                dispatch(phoneExistAction(false));
                dispatch(addPhoneAction(response.data.number));
            })
            .catch((e) => {
                if (e.response.status === 409) {
                    dispatch(phoneExistAction(true));
                    console.log('Number is already in the list');
                } else {
                    console.error(e);
                }
            });
    };
};

export default addPhone;
