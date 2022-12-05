import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {withdrawalSlicer} from "../../../store/reducers/withdrawals/withdrawalSlicer";
import translate from "../../../i18n/translate";

const WaitError = ({error}) => {
    let dispatch = useDispatch()

    function closeTransactionNote() {
        dispatch(withdrawalSlicer.actions.firstStage())
    }

    return (
        <div className="wait_please_width"
             style={{display: (error)? 'flex': 'none'}}
        >
            <main className="wait_please wait_success">
                <div className="img no_animation">
                    <svg style={{marginBottom: "-100px"}} width="350" height="350" viewBox="0 0 350 350" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M233.803 234.227L116.197 116.621" stroke="#E5383B" strokeWidth="17.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M116.197 234.227L233.803 116.621" stroke="#E5383B" strokeWidth="17.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="failed_to_with">{translate("Failed to withdraw money")}</h2>
                <span>
                {translate("A more detailed description of the reason for the unsuccessful withdrawal of money")}
            </span>


                <div className="wait_back">
                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.3283 7.83784L10.5524 12.6137C10.1492 13.0169 10.1492 13.6705 10.5524 14.0737L15.3283 18.8496"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Link to={'/'} onClick={closeTransactionNote}>
                        <span>
                            {translate("Go back to home page")}
                        </span>
                    </Link>
                </div>
            </main>
        </div>

    );
};

export default WaitError;