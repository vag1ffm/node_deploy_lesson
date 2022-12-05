import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {withdrawalSlicer} from "../../../store/reducers/withdrawals/withdrawalSlicer";
import translate from "../../../i18n/translate";

const WaitSuccess = ({success}) => {
    let dispatch = useDispatch()

    function closeTransactionNote() {
        dispatch(withdrawalSlicer.actions.firstStage())
    }

    return (
        <div className="wait_please_width"
             style={{display: (success)? 'flex': 'none'}}
        >
            <main className="wait_please wait_success">
                <div className="img no_animation">
                    <svg width="194" height="124" viewBox="0 0 194 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 63.3133L62.972 112.643C65.6569 115.119 70.0096 115.119 72.6945 112.643L184.5 9.5"
                              stroke="#00CA61" strokeWidth="17.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>


                <h2>{translate("Money withdrawn successfully")}</h2>

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

export default WaitSuccess;