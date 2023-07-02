// import axios from 'axios';
// import { BASE_URL, PORT, API_PATH } from '../config/config.default';
// import { ADD_PHONE } from '../store/actions';
// import { addPhoneAction } from '../store/reducer';

// const addPhone = async () => {
//     try {
//         const response = await axios.post(
//             `${BASE_URL}${PORT}${API_PATH}/add-phone`,
//             {
//                 number: `${code}${phone}`,
//                 country: `RU`, // Подумать как прокинуть сюда страну
//             }
//         );
//         const addedPhone = response.data.number;
//         dispatch(addPhoneAction(addedPhone));
//     } catch (e) {
//         console.error(e);
//     }
// };

// export default addPhone;