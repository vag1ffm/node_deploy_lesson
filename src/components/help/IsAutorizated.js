import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMyInfo} from "../../store/reducers/user/axios";

const IsAuthorized = () => {
    let history = useNavigate()
    let dispatch = useDispatch()

    useEffect(()=> {
        let isAuto = localStorage.getItem('app_token')===null
        if (isAuto) {
            history('/start')
        } else {

            // dispatch(getMyInfo())
        }
    }, [])
};

export default IsAuthorized;