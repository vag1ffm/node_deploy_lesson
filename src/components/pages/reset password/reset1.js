import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {ResetPassword} from "../../../store/reducers/authorization/axios";
import {Link, useNavigate} from "react-router-dom";
import translate from "../../../i18n/translate";
import {FormattedMessage} from "react-intl";

const Reset1 = () => {
    let [email, setEmail] = useState('')
    let history = useNavigate()

    let dispatch = useDispatch()

    function emailHandler(e) {
        setEmail(e.target.value)
    }
    function resetPass() {
        let data = {
            'email': email.toLowerCase()
        }
        dispatch(ResetPassword(data, history))
    }


    return (
        <main>
            <Link to={'/login'}>
                <div className="back" style={{position: 'absolute'}}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Link>
            <div className="reset-pass">
                <h2>{translate('Reset password')}</h2>
                <p>
                    {translate('Please enter the email address your account is registered with below')}

                </p>
                <div className="inputs">
                    <div className="input">
                        <i>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7V14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14V7Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M16.9997 6.99841L11.3013 11.8828C10.5523 12.5247 9.44708 12.5247 8.6981 11.8828L3 6.99869"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <FormattedMessage id={'Email'}>
                            {(msg) => (  <input type="email" placeholder={msg}
                                                value={email}
                                                onChange={emailHandler}
                            />)}
                        </FormattedMessage>

                    </div>
                </div>
                <div className="button button5"
                    onClick={resetPass}
                >
                    {translate('Log in')}

                </div>
            </div>

        </main>
    );
};

export default Reset1;