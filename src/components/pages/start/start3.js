import React, {useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Step0 from "./steps/step0";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import translate from "../../../i18n/translate";
import {userSlicer} from "../../../store/reducers/user/userSlicer";
import {chequeSlicer} from "../../../store/reducers/cheques/chequeSliser";
import {withdrawalSlicer} from "../../../store/reducers/withdrawals/withdrawalSlicer";
import {balanceSlice} from "../../../store/reducers/balance/balanceSlice";
import {useDispatch} from "react-redux";

const Start3 = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(userSlicer.actions.logout())
        dispatch(chequeSlicer.actions.logout())
        dispatch(withdrawalSlicer.actions.logout())
        dispatch(balanceSlice.actions.logout())
    }, [])
    return (
        <main>
            <div className="first-level">
                <Link to={'/start3/language'}>
                    <div className="language">
                        <span>{translate('Language')}</span>
                        <i>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.35294 5.09007L7.25129 9.98842C7.6648 10.4019 8.3352 10.4019 8.7487 9.98842L13.6471 5.09007"
                                    stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                    </div>
                </Link>
                <div className="company-name medico3">
                    <span>medi</span>
                    <span>co</span>
                </div>

                <Routes>
                    <Route path={'/'} element={<Step0/>}/>
                    <Route path={'/step1'} element={<Step1/>}/>
                    <Route path={'/step2'} element={<Step2/>}/>
                    <Route path={'/step3'} element={<Step3/>}/>

                </Routes>



            </div>
            <div className="second-level">
                <Link to={'/register'}>
                    <div className="button button2">
                        {translate('Create account')}

                    </div>
                </Link>
                <Link to={'/login'}>
                    <div className="button button3">
                        {translate('Enter to your account')}


                    </div>
                </Link>

            </div>
        </main>
    );
};

export default Start3;