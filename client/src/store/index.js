import { combineReducers } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
    contactNumbers : phoneReducer,
    error: errorReducer,
})

export default rootReducer;