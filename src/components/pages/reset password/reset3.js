import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ResetPasswordConfirm} from "../../../store/reducers/authorization/axios";
import translate from "../../../i18n/translate";
import {FormattedMessage} from "react-intl";

const Reset3 = () => {
    let {uid, token} = useParams()

    let [password1, setPassword1] = useState('')
    let [password2, setPassword2] = useState('')

    let dispatch = useDispatch()
    let history = useNavigate()

    function ResetPass() {
        let data = {
            'uid': uid,
            'token': token,
            'new_password': password1,
            'new_password1': password2,
        }
        dispatch(ResetPasswordConfirm(data, history))
    }


    return (
        <main>
            <div className="back" style={{position: 'absolute'}}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                        stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="reset-pass3">
                <h2>{translate('Create new password')}</h2>
                <p>
                    {translate('Your new password must be different from previous used password')}

                    </p>
                <div className="inputs">
                    <div className="input">
                        <i>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.5 10.5208C4.5 10.2677 4.7052 10.0625 4.95832 10.0625H15.0417C15.2948 10.0625 15.5 10.2677 15.5 10.5208V17.1042C15.5 17.3573 15.2948 17.5625 15.0417 17.5625H4.95832C4.7052 17.5625 4.5 17.3573 4.5 17.1042V10.5208Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9.25 14.5626C9.6642 14.9768 10.3358 14.9768 10.75 14.5626C11.1642 14.1484 11.1642 13.4768 10.75 13.0626C10.3358 12.6484 9.6642 12.6484 9.25 13.0626C8.83577 13.4768 8.83577 14.1484 9.25 14.5626Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M6.625 10.0625V7.9375C6.625 6.07355 8.13605 4.5625 10 4.5625C11.864 4.5625 13.375 6.07355 13.375 7.9375V10.0625"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </i>

                        <FormattedMessage id={'Email'}>
                            {(msg) => (  <input type="password" placeholder={msg}
                                                value={password1}
                                                onChange={(e)=> setPassword1(e.target.value)}
                            />)}
                        </FormattedMessage>

                            <span>{translate('Must be at least 8 characters')}</span>
                    </div>
                    <div className="input">
                        <i>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.5 10.5208C4.5 10.2677 4.7052 10.0625 4.95832 10.0625H15.0417C15.2948 10.0625 15.5 10.2677 15.5 10.5208V17.1042C15.5 17.3573 15.2948 17.5625 15.0417 17.5625H4.95832C4.7052 17.5625 4.5 17.3573 4.5 17.1042V10.5208Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9.25 14.5626C9.6642 14.9768 10.3358 14.9768 10.75 14.5626C11.1642 14.1484 11.1642 13.4768 10.75 13.0626C10.3358 12.6484 9.6642 12.6484 9.25 13.0626C8.83577 13.4768 8.83577 14.1484 9.25 14.5626Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M6.625 10.0625V7.9375C6.625 6.07355 8.13605 4.5625 10 4.5625C11.864 4.5625 13.375 6.07355 13.375 7.9375V10.0625"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </i>
                        <input type="password" placeholder="Confirm Password"
                               value={password2}
                               onChange={(e)=> setPassword2(e.target.value)}
                        />
                            <span>{translate('Both passwords must match')}</span>
                    </div>
                </div>

                <div className="button button5" onClick={ResetPass}>
                    {translate('Reset password')}
                </div>
            </div>

        </main>
    );
};

export default Reset3;