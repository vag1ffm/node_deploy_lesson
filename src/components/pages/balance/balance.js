import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMyBalance} from "../../../store/reducers/balance/axios";
import {getTransaction} from "../../../store/reducers/withdrawals/axios";
import History from "./history";
import HistoryAnimation from "./historyAnimation";
import translate from "../../../i18n/translate";

const Balance = () => {
    let {balance} = useSelector(state => state.balanceSlice)
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTransaction())
        dispatch(getMyBalance())
    }, [])
    let {transactions, isLoading, error} = useSelector(state => state.withdrawalSlicer)

    return (
        <>
            <header>
                <div className="back">
                    <Link to={'/'}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                </div>
                <h2>{translate("Balance")}</h2>
            </header>
            <main className="balance">

                <div className="pending_your_balance">
                    <div className="pending">
                        <span>{translate("Pending")}</span>
                        <div className={"manat"}>
                            {balance.pending_balance} ₼
                        </div>
                    </div>
                    <i>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.4798 2.94116L15.792 8.33622C16.6968 9.2551 16.6968 10.7449 15.792 11.6638L10.4798 17.0588"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M3.52937 2.94116L8.84156 8.33622C9.74633 9.2551 9.74633 10.7449 8.84156 11.6638L3.52937 17.0588"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </i>
                    <div className="your_balance">
                        <span>{translate("Your balance")}</span>
                        <div className={"manat"}>
                            {balance.real_balance} ₼
                        </div>
                    </div>
                </div>
                <Link to={'/withdrawals'}>
                    <div className="button button9">
                        {translate("Withdraw")}
                    </div>
                </Link>
                <div className="bottom_level">
                    <h2>
                        {translate("Transaction History")}
                    </h2>
                    <div className="histories">

                        {'transactions' && transactions.map((trans, index) => {
                            if (trans.cc_number) {
                                return <History word={translate("To the Card")} key={index} trans={trans}/>
                            } else {
                                return <History word={translate("To Phone number")} key={index} trans={trans}/>
                            }
                        })}

                        { isLoading && <HistoryAnimation/> }

                    </div>
                </div>
            </main>
        </>
    );
};

export default Balance;