import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ActivateEmail} from "../../../store/reducers/authorization/axios";

const ActivateEmailPage = () => {
    let {Uid, token} = useParams()
    let history = useNavigate()
    let dispatch = useDispatch()

    useEffect(()=> {
        let data = {
            'uidb64' : Uid,
            'token': token
        }
        dispatch(ActivateEmail(data,history))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ActivateEmailPage;