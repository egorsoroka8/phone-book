const defaultState = {
    isError: false,
}

const PHONE_EXIST = 'PHONE_EXIST';

export const errorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PHONE_EXIST:
            return {
                ...state,
                isError: action.payload,
            };
        default:
            return state;
    }
};

export const phoneExistAction = (payload) => ({ type: PHONE_EXIST, payload });