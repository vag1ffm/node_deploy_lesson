import axios from "axios";
import {balanceSlice} from "./balanceSlice";
import {headers} from "../helps";
import {url} from "../../../components/help/api";


export const getMyBalance = () => async (dispatch) => {
    try {
        dispatch(balanceSlice.actions.loading())
        const response = await axios.get(`${url}/account/api/check_balance/`,
            headers()
        )
        dispatch(balanceSlice.actions.userBalance(response.data))
    } catch (e) {
        dispatch(balanceSlice.actions.error())
        console.log(e)
    }
}

export const getUserCard = () => async (dispatch) => {
    try {

        const response = await axios.get(`${url}/account/api/cards/`,
            headers()
        )
        dispatch(balanceSlice.actions.getUserCards(response.data))
    } catch (e) {
        console.log(e)
    }
}
