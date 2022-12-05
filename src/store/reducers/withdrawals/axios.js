import axios from "axios";
import {withdrawalSlicer} from "./withdrawalSlicer";
import {headers} from "../helps";
import {url} from "../../../components/help/api";

export const Withdrawal_Card = (data, history) => async (dispatch) => {
    try {
        dispatch(withdrawalSlicer.actions.loading())
        await axios.post(`${url}/cashback/withdraw-card/`,
            data,  headers()
        )
        // history('/')
        setTimeout(()=> {
            dispatch(withdrawalSlicer.actions.success())
        }, 1000)
    } catch (e) {
        console.log(e)
        dispatch(withdrawalSlicer.actions.error())
    }
}

export const Withdrawal_Phone = (data) => async (dispatch) => {
    try {
        dispatch(withdrawalSlicer.actions.loading())

        await axios.post(`${url}/cashback/withdraw-tel/`,
            data, headers()
        )
        setTimeout(()=> {
            dispatch(withdrawalSlicer.actions.success())
        }, 1000)
    } catch (e) {
        console.log(e)
        dispatch(withdrawalSlicer.actions.error())
    }
}

export const getTransaction = () => async (dispatch) => {
    try {
        dispatch(withdrawalSlicer.actions.loading())

        let response_phone = await axios.get(`${url}/cashback/withdraw-tel/`,
             headers()
        )

        let response_card = await axios.get(`${url}/cashback/withdraw-card/`,
             headers()
        )

        setTimeout(()=> {
            let listOfTransactions = [...response_card.data.results, ...response_phone.data.results]
            dispatch(withdrawalSlicer.actions.getTransactions(listOfTransactions))
        }, 1000)

    } catch (e) {
        console.log(e)
        dispatch(withdrawalSlicer.actions.error())
    }
}

