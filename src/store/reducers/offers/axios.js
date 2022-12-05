import axios from "axios";
import {headers} from "../helps";
import {url} from "../../../components/help/api";

export const getOffers = () => async (dispatch) => {
    try {

        const response = await axios.get('http://127.0.0.1:8000/',
            headers()
        )
        console.log(response.data)


    } catch (e) {

        console.log(e)
    }
}
