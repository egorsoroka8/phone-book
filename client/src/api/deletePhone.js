// import axios from 'axios';
// import { BASE_URL, PORT, API_PATH } from '../config/config.default';
// import { REMOVE_PHONE } from '../store/actions';
// import { removePhoneAction } from '../store/reducer';

// const deletePhone = async () => {
//     try {
//         const response = await axios.delete(
//             `${BASE_URL}${PORT}${API_PATH}/remove-phone`,
//             {
//                 data: {
//                     number: `${code}${phone}`,
//                 },
//             }
//         );
//         const number = response.data;
//         dispatch((removePhoneAction(number)));
//     } catch (e) {
//         console.error(e);
//     }
// };

// export default deletePhone;
