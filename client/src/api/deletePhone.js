import { removePhoneAction } from '../store/reducer';
import axios from 'axios';
import { BASE_URL, BASE_PORT, API_PATH } from '../config/config.default';

const deletePhone = (code, phone) => {
    return function (dispatch) {
        axios
            .delete(`${BASE_URL}${BASE_PORT}${API_PATH}/remove-phone`, {
                data: {
                    number: `${code}${phone}`,
                },
            })
            .then((response) => {
                console.log(response);
                dispatch(removePhoneAction(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export default deletePhone;
