import axios from "axios";
import {userSlicer} from "./userSlicer";
import {headers} from "../helps";
import {url} from "../../../components/help/api";
import {getMyBalance} from "../balance/axios";
import {getCheques} from "../cheques/axios";

export const getMyInfo = () => async (dispatch) => {
    try {
        dispatch(userSlicer.actions.loading())
        const response = await axios.get(`${url}/account/api/auth/users/me/`,
            headers()
        )
        dispatch(userSlicer.actions.mainInfo(response.data))
    } catch (e) {
        dispatch(userSlicer.actions.error())
        console.log(e)
    }
}

export const changeMyInfo = (data) => async (dispatch) => {
    try {
        const response = await axios.put(`${url}/account/api/auth/users/me/`,
            data, headers()
        )
        console.log(response.data)
        dispatch(getMyInfo())
    } catch (e) {
        console.log(e)
    }
}
export const AddPhoto = (photo, user_id) => async (dispatch) => {
    try {
        const response = await axios.put(`${url}/account/api/photo/${user_id}/`,
            {profile_photo: photo},
            {
                headers: {
                    Authorization : `Token ${localStorage.getItem('app_token')}`,
                    REACT: 'react',
                    'Content-Type': 'multipart/form-data',
                },
            },
        )
        dispatch(getMyInfo())
    } catch (e) {
        console.log(e)
    }
}
