import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
    phone : phoneReducer,
    error: errorReducer,
})

export default rootReducer;