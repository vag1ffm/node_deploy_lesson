import axios from "axios";
import {headers} from "../helps";
import {userSlicer} from "../user/userSlicer";
import {chequeSlicer} from "../cheques/chequeSliser";
import {withdrawalSlicer} from "../withdrawals/withdrawalSlicer";
import {balanceSlice} from "../balance/balanceSlice";
import {url} from "../../../components/help/api";
import translate from "../../../i18n/translate";
import {FormattedMessage} from "react-intl";
import React from "react";



export const Login = (data, history) => async (dispatch) => {
    try {
        const response = await axios.post(`${url}/account/api/auth/token/login/`,
            data,
            {headers: {REACT: 'react'}}
        )
        localStorage.setItem('app_token', response.data.auth_token)
        // if (verify) {
        //     dispatch(VerificationNumber())
        //     history('/verification1')
        // } else {
        console.log(response.data)
            history('/')
        // }
    } catch (e) {
        for (let i of Object.values(e.response.data)) {
            alert(i)
        }
    }
}
export const Registration = (data, history) => async (dispatch) => {
    try {
       await axios.post(`${url}/account/api/auth/users/`,
            data,
            { headers: {REACT: 'react'} }
        )
        dispatch(Login(data, history))
        // dispatch(SendActivateMessageEmail())

    } catch (e) {
        for (let i of Object.values(e.response.data)) {
            alert(i)
        }
    }
}
export const Logout = (history) => async (dispatch) => {
    try {
        // await axios.post(`${url}/account/api/auth/token/logout/`,
        //     {}, headers()
        // )
        dispatch(userSlicer.actions.logout())
        dispatch(chequeSlicer.actions.logout())
        dispatch(withdrawalSlicer.actions.logout())
        dispatch(balanceSlice.actions.logout())
        localStorage.removeItem('app_token')
        history('/start')
    } catch (e) {
        console.log(e)
    }

}

export const SendActivateMessageEmail = () => async () => {
    try {
        let response = await axios.get(`${url}/account/api/user/email_verify/`,
            headers()
        )
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

// export const VerificationNumber = () => async () => {
//     try {
//         let response = await axios.get(`${url}/account/api/user/phone_number_verify/`,
//             headers()
//         )
//         console.log(response)
//     } catch (e) {
//         console.log(e)
//     }
// }


export const ActivateEmail = (data, history) => async () => {
    try {
        let response = await axios.post(`${url}/account/api/user/email_verify/`,
            data,  headers()
        )
        history('/')
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

// /account/auth/users/reset_password/
// post email
// log 200 nice
// log 400 email shit

export const ResetPassword = (data, history) => async () => {
    try {
        let response = await axios.post(`${url}/account/api/auth/users/reset_password/`,
            data)
        history('/resetPass2')
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

// post uid token
// 1. new_password
// 2. re_new_password
// log 204 nice
// log 400 email shi

export const ResetPasswordConfirm = (data, history) => async () => {
    try {
        let response = await axios.post(`${url}/account/api/auth/users/reset_password_confirm/`,
            data, {
                headers: {
                    REACT: 'react',
                }
            }
        )
        console.log(response)
        history('/resetPass4')
    } catch (e) {
        console.log(e)
    }
}

// old_password
// new_password1
// new_password2

export const passwordChange = (data, history) => async () => {
    try {
        let response = await axios.post(`${url}/account/api/user/password_change/`,
            data, headers()
        )
        console.log(response)
        history('/profile_edit')
    } catch (e) {
        console.log(e)
    }
}











































































































// export const fetchUser = () => async (dispatch) => {
//     try {
//         dispatch(authSlice.actions.usersFetching())
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//         setTimeout(()=> {
//             dispatch(authSlice.actions.usersFetchingSuccess(response.data))
//         }, 2000)
//
//     } catch (e) {
//         dispatch(authSlice.actions.usersFetchingError(e.messages))
//
//     }
// }

//
// export const fetchUser = createAsyncThunk(
//     'user/fetchMe',
//     async (_,thunkAPI) => {
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/account/auth/token/login/',
//                 {
//                     headers: {
//                         REACT: 'react'
//                     },
//                 },
//                 )
//             console.log(response.data)
//             // return response.data
//         } catch (e) {
//             console.log(e)
//             // return thunkAPI.rejectWithValue('Error')
//         }
//
//     }
// )