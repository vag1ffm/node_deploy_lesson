import axios from "axios";
import {headers} from "../helps";
import {chequeSlicer} from "./chequeSliser";
import {url} from "../../../components/help/api";

export const getCheques = (stage) => async (dispatch) => {
    try {
        dispatch(chequeSlicer.actions.loading())
        const response = await axios.get(`${url}/cashback/fiscal/?filter=${stage}`,
            headers()
        )
        setTimeout(()=> {
            dispatch(chequeSlicer.actions.ChequesMain(response.data.results))
        }, 500)
    } catch (e) {
        dispatch(chequeSlicer.actions.error())
        console.log(e)
    }
}

export const getFilteredDateCheques = (from, to, filter) => async (dispatch) => {
    try {
        dispatch(chequeSlicer.actions.loading())
        let response = await axios.get(
            `${url}/cashback/fiscal/?filter=${filter}&date_from=${from}&date_to=${to}`,
            headers()
        )

        setTimeout(()=> {
            dispatch(chequeSlicer.actions.filteredCheques(response.data.results))
        }, 2000)
    } catch (e) {
        dispatch(chequeSlicer.actions.error())
        console.log(e)
    }
}
export const getFilteredSumCheques = (from, to, filter) => async (dispatch) => {
    try {
        dispatch(chequeSlicer.actions.loading())
        let response
        // if (from && to) {
            response = await axios.get(
                `${url}/cashback/fiscal/?filter=${filter}&min_amount=${from}&max_amount=${to}`,
                headers()
            )
        // } else if (from) {
        //     response = await axios.get(
        //         `${url}/cashback/fiscal/?filter=${filter}&min_amount=${from}`,
        //         headers()
        //     )
        // } else if (to) {
        //     response = await axios.get(
        //         `${url}/cashback/fiscal/?filter=${filter}&max_amount=${to}`,
        //         headers()
        //     )
        // }

        console.log(response)

        setTimeout(()=> {
            dispatch(chequeSlicer.actions.filteredCheques(response.data.results))
        }, 2000)
    } catch (e) {
        dispatch(chequeSlicer.actions.error())
        console.log(e)
    }
}

export const sendFiscalId = (data, history, method) => async () => {
    try {
        history('/loading')
        let response = await axios.post(`${url}/cashback/fiscal/`,
            data , headers()
        )
        if (method === 'code') {
            history('/successCode')
        } else if (method === 'scan') {
            history('/successScan')
        }
    } catch (e) {
        history('/scanner')
        console.log(e)
    }
}

export const getFiscalInfo = (fiscal) => async (dispatch) => {
    try {
        dispatch(chequeSlicer.actions.loading())
        let response = await axios.get(`${url}/cashback/fiscal/${fiscal}`,
             headers()
        )
        console.log(response.data)
        setTimeout(()=> {
            dispatch(chequeSlicer.actions.lastCheque(response.data))
        }, 1000)

    } catch (e) {
        dispatch(chequeSlicer.actions.error())
        console.log(e)
    }
}



