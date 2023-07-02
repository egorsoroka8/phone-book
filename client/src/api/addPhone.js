import axios from 'axios';
import { BASE_URL, PORT, API_PATH } from '../config/config.default';
import { ADD_PHONE } from '../store/actions';
import { addPhoneAction } from '../store/reducer';

const addPhone = async (code, phone, dispatch) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${PORT}${API_PATH}/add-phone`,
            {
                number: `${code}${phone}`,
                country: `RU`, // Подумать как прокинуть сюда страну
            }
        );
        console.log(response.data);
        const addedPhone = response.data.number;
        // dispatch(addPhoneAction(addedPhone)); Заменить когда код заработает
        dispatch({ type: ADD_PHONE, payload: addedPhone });
    } catch (e) {
        console.error(e);
    }
};

export default addPhone;