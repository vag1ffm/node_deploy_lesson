import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import translate from "../../../i18n/translate";
import {useDispatch, useSelector} from "react-redux";
import {getUserCard} from "../../../store/reducers/balance/axios";

const WithdrawalVariants = () => {


    let {cards} = useSelector(state => state.balanceSlice)


    console.log(Boolean(cards),cards)

    return (
        <main className="withdrawals">
            <h3>{translate("Money withdrawal method")}</h3>
            <div className="withdrawal_variants">
                <Link
                    to={[].length? '/withdrawals/card': '/withdrawals/userCards'}
                >
                    <div className="withdrawal_variant">
                        <div className="left">
                            <i>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <line x1="2.66671" y1="3.16667" x2="14" y2="3.16667" stroke="#38453E"
                                          strokeWidth="0.666667" strokeLinecap="round"/>
                                    <line x1="2.66671" y1="5.66667" x2="10.3334" y2="5.66667" stroke="#38453E"
                                          strokeWidth="0.666667" strokeLinecap="round"/>
                                    <rect x="0.666707" y="0.333333" width="16.6667" height="10.6667" rx="1"
                                          stroke="#38453E" strokeWidth="0.666667"/>
                                </svg>
                            </i>
                            <span>
                                {translate("To Bank card")}
                            </span>
                        </div>
                        <div className="right">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34998"
                                    stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link to={'/withdrawals/phone'}>
                    <div className="withdrawal_variant">
                        <div className="left">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 15.5H9" stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M6 3.5C6 3.22385 6.22385 3 6.5 3H13.5C13.7761 3 14 3.22385 14 3.5V16.5C14 16.7761 13.7761 17 13.5 17H6.5C6.22385 17 6 16.7761 6 16.5V3.5Z"
                                    stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>
                                {translate("To Phone number")}
                            </span>
                        </div>
                        <div className="right">
                            <i>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34998"
                                        stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    );
};

export default WithdrawalVariants;