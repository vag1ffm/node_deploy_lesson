import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: '',
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        mainInfo(state, action) {
            state.isLoading = false

            state.user.email = action.payload.email
            state.user.id = action.payload.id
            state.user.userName = action.payload.username
            state.user.address = action.payload.address
            state.user.number = action.payload.phone_number
            state.user.gender = action.payload.gender
            state.user.dataOfBirth = action.payload.birth_day
            state.user.profile_photo = action.payload.profile_photo

        },

        loading(state) {
            state.isLoading = true
        },
        error(state) {
            state.isLoading = false
            state.error = 'Ошибка'
        },
        userBalance(state, action) {
            state.isLoading = false

            state.user.real_balance = action.payload.balance.real
            state.user.pending_balance = action.payload.balance.pending
            state.user.monthly_revenue = action.payload.balance.monthly_revenue
            state.user.month_number = action.payload.balance.month_number

        },
        // Language(state,action) {
        //     state.user.language =
        // },
        logout(state) {
            state.user = initialState.user
            state.isLoading = initialState.isLoading
            state.error = initialState.error
        }

    },

})

export default userSlicer.reducer;