import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: '',
}
// eslint-disable-next-line
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setInfo(state, action) {
            state.user = action.payload
        }

    },
    // extraReducers: {
    //     [fetchUser.fulfilled.type]: (state, action) => {
    //         state.isLoading = false
    //         state.error = ''
    //         state.user = action.payload
    //     },
    //     [fetchUser.rejected.type]: (state, action) =>  {
    //         state.isLoading = false
    //         state.error = action.payload
    //     },
    //     [fetchUser.pending.type]: (state) => {
    //         state.isLoading = true
    //     }
    // }
})

export default authSlice.reducer;