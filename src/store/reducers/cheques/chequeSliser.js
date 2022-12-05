import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    cheques: [],
    lastCheque: {},
    isLoading: false,
    error: ''
}


export const chequeSlicer = createSlice({
    name: 'cheques',
    initialState,
    reducers: {
        ChequesMain(state, action) {
            state.isLoading = false
            state.cheques = action.payload
        },
        loading(state) {
            state.cheques = []
            state.isLoading = true
        },
        error(state) {
            state.cheques = []
            state.isLoading = false
            state.error = 'Ошибка'
        },
        lastCheque(state, action) {
            state.isLoading = false
            state.lastCheque = action.payload
        },
        logout(state) {

            state.cheques = initialState.cheques
            state.isLoading = initialState.isLoading
            state.error = initialState.error
            state.lastCheque = initialState.lastCheque
        },
        filteredCheques(state, action) {
            state.isLoading = false
            state.cheques = action.payload

        }
    }
})

export default chequeSlicer.reducer