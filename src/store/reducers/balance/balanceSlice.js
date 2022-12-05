import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: {},
    cards: [],
    isLoading: false,
    error: '',
}

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true
        },
        error(state) {
            state.isLoading = false
            state.error = 'Ошибка'
        },
        userBalance(state, action) {
            state.isLoading = false

            state.balance.real_balance = action.payload.balance.real
            state.balance.pending_balance = action.payload.balance.pending
            state.balance.monthly_revenue = action.payload.balance.monthly_revenue
            state.balance.month_number = action.payload.balance.month_number
        },
        getUserCards(state, action) {
            state.cards = action.payload
        },
        logout(state) {

            state.balance = initialState.balance
            state.isLoading = initialState.isLoading
            state.error = initialState.error
        }

    },

})

export default balanceSlice.reducer;