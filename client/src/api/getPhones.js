// import axios from 'axios';
// import { BASE_URL, PORT, API_PATH } from '../config/config.default';
// import { GET_PHONES } from '../store/actions';
// import { getPhonesAction } from '../store/reducer';

// const getPhones = async (dispatch) => {
//     try {
//         const response = await axios.get(
//             `${BASE_URL}${PORT}${API_PATH}/get-phones`,
//         );
//         const numbers = response.data.map((el) => el.number);
//         dispatch((getPhonesAction(numbers)));
//     } catch (e) {
//         console.error(e);
//     }
// };

// export default getPhones;