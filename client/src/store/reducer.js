import defaultState from './defaultState';

const ADD_PHONE = 'ADD_PHONE';
const GET_PHONES = 'GET_PHONES';
const REMOVE_PHONE = 'REMOVE_PHONE';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PHONE:
            return {
                ...state,
                phones: [...state.phones, action.payload],
            };
        case GET_PHONES:
            return {
                ...state,
                phones: action.payload,
            };
        case REMOVE_PHONE:
            const updatedPhones = state.phones.filter(
                (number) => number !== action.payload
            );
            return {
                ...state,
                phones: updatedPhones,
            };
        default:
            return state;
    }
};

export default reducer;

export const addPhoneAction = (payload) => ({ type: ADD_PHONE, payload });
export const getPhonesAction = (payload) => ({ type: GET_PHONES, payload });
export const removePhoneAction = (payload) => ({ type: REMOVE_PHONE, payload });