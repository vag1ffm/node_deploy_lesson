import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userSlicer} from "../../../store/reducers/user/userSlicer";
import {chequeSlicer} from "../../../store/reducers/cheques/chequeSliser";
import {withdrawalSlicer} from "../../../store/reducers/withdrawals/withdrawalSlicer";
import {balanceSlice} from "../../../store/reducers/balance/balanceSlice";

const Start = () => {
    let dispatch = useDispatch()
    let history = useNavigate()
    useEffect(()=> {
        setTimeout(()=> {
            history('/start2')
        }, 1000)

        dispatch(userSlicer.actions.logout())
        dispatch(chequeSlicer.actions.logout())
        dispatch(withdrawalSlicer.actions.logout())
        dispatch(balanceSlice.actions.logout())
    }, [])

    return (
        <div className="bcground">
            <main>
                <div className="company-name medico1">
                    <span>medi</span>
                    <span>co</span>
                </div>
            </main>
        </div>
    );
};

export default Start;