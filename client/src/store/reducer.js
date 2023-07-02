import { ADD_PHONE, GET_PHONES, REMOVE_PHONE } from './actions';
import defaultState from './defaultState';

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