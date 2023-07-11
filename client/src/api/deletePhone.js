import { removePhoneAction } from '../store/phoneReducer';
import axios from 'axios';
import { BASE_URL, BASE_PORT, API_PATH } from '../config/config.default';
import { phoneExistAction } from '../store/errorReducer';

const deletePhone = (phone) => {
    return function (dispatch) {
        axios
            .delete(`${BASE_URL}${BASE_PORT}${API_PATH}/remove-phone`, {
                data: {
                    number: `${phone}`,
                },
            })
            .then((response) => {
                dispatch(phoneExistAction(false));
                dispatch(removePhoneAction(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export default deletePhone;
