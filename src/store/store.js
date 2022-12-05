import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlicer from './reducers/user/userSlicer'
import withdrawalSlicer from "./reducers/withdrawals/withdrawalSlicer";
import chequeSlicer from "./reducers/cheques/chequeSliser";
import balanceSlice from "./reducers/balance/balanceSlice";
import languageSlice from "./reducers/Language/languageSlice";

const rootReducer = combineReducers({
    userSlicer,
    withdrawalSlicer,
    chequeSlicer,
    balanceSlice,
    languageSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

