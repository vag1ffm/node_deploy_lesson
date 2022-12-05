import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    transactions : [],
    success: false,
    isLoading: false,
    error: false,

}

export const withdrawalSlicer = createSlice({
    name: 'withdrawals',
    initialState,
    reducers: {
        firstStage(state) {
            state.isLoading = false
            state.success = false
            state.error = false
        },
        success(state) {
            state.isLoading = false
            state.success = true
        },
        loading(state) {
            state.isLoading = true
        },
        error(state) {
            state.isLoading = false
            state.error = true
        },
        getTransactions(state, action) {
            state.isLoading = false
            
            state.transactions = [...action.payload]
        },
        logout(state) {

            state.transactions = initialState.transactions
            state.isLoading = initialState.isLoading
            state.error = initialState.error
            state.success = initialState.success
        }



    },

})

export default withdrawalSlicer.reducer;