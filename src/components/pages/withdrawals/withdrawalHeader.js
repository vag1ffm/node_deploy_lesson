import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMyBalance, getUserCard} from "../../../store/reducers/balance/axios";
import translate from "../../../i18n/translate";

const WithdrawalHeader = () => {
    let {balance, isLoading, error} = useSelector(state => state.balanceSlice)

    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getUserCard())
    }, [])


    return (
        <header className="withdrawals">
            <div className="back" style={{position: 'absolute'}}>
                <Link to={'/balance'}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
            <h2>{translate("Withdrawals")}</h2>
            <div className="your_balance">
                <span>{translate("Your balance")}</span><br/>
                <span className={"manat " + (isLoading && 'loading-money2')}>
                    {'user999' && balance.real_balance} ₼
                    {error && 'Error'}
                </span>
            </div>
        </header>
    );
};

export default WithdrawalHeader;