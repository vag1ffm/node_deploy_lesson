import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    language : localStorage.getItem('lang') || 'azerbaijani'
}


export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage(state, action) {
            localStorage.setItem('lang', action.payload)
            state.language = action.payload
        }
    },

})

export default languageSlice.reducer;