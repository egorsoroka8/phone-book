const defaultState = {
    numbers: [],
}

const ADD_PHONE = 'ADD_PHONE';
const GET_PHONES = 'GET_PHONES';
const REMOVE_PHONE = 'REMOVE_PHONE';

export const phoneReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PHONE:
            return {
                ...state,
                numbers: [...state.numbers, action.payload],
            };
        case GET_PHONES:
            return {
                ...state,
                numbers: action.payload,
            };
        case REMOVE_PHONE:
            const updatedPhones = state.numbers.filter(
                (number) => number !== action.payload
            );
            return {
                ...state,
                numbers: updatedPhones,
            };
        default:
            return state;
    }
};

export const addPhoneAction = (payload) => ({ type: ADD_PHONE, payload });
export const getPhonesAction = (payload) => ({ type: GET_PHONES, payload });
export const removePhoneAction = (payload) => ({ type: REMOVE_PHONE, payload });