import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {passwordChange} from "../../../store/reducers/authorization/axios";
import translate from "../../../i18n/translate";

const PasswordChange = () => {

    let dispatch = useDispatch()
    let history = useNavigate()

    let [ oldPass, setOldPass] = useState('')
    let [ newPass1, setNewPass1] = useState('')
    let [ newPass2, setNewPass2] = useState('')

    function Save() {
        let data = {
            'old_password': oldPass,
            'new_password1': newPass1 ,
            'new_password2': newPass2,
        }

        dispatch(passwordChange(data, history))
    }


    return (
        <>
            <header className="profile_edit">
                <div className="left">
                    <Link to={'/profile_edit'}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    <h2>{translate('Account')}</h2>
                </div>
            </header>

            <main className="profile_edit">

                <div className="profile_main password_change">
                    <div className="inputs">
                        <div className="input">
                            <input type="password" placeholder="Old password"
                                value={oldPass}
                                   onChange={(e)=> setOldPass(e.target.value)}
                            />
                                <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.5 10.5208C4.5 10.2677 4.7052 10.0625 4.95832 10.0625H15.0417C15.2948 10.0625 15.5 10.2677 15.5 10.5208V17.1042C15.5 17.3573 15.2948 17.5625 15.0417 17.5625H4.95832C4.7052 17.5625 4.5 17.3573 4.5 17.1042V10.5208Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M9.25012 14.5625C9.66432 14.9767 10.3359 14.9767 10.7501 14.5625C11.1643 14.1483 11.1643 13.4767 10.7501 13.0625C10.3359 12.6483 9.66432 12.6483 9.25012 13.0625C8.8359 13.4767 8.8359 14.1483 9.25012 14.5625Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M6.625 10.0625V7.9375C6.625 6.07355 8.13605 4.5625 10 4.5625C11.864 4.5625 13.375 6.07355 13.375 7.9375V10.0625"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>


                                </i>
                        </div>
                        <div className="input">
                            <input type="password" placeholder="New password"
                                value={newPass1}
                                   onChange={(e)=> setNewPass1(e.target.value)}
                            />
                                <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.5 10.5208C4.5 10.2677 4.7052 10.0625 4.95832 10.0625H15.0417C15.2948 10.0625 15.5 10.2677 15.5 10.5208V17.1042C15.5 17.3573 15.2948 17.5625 15.0417 17.5625H4.95832C4.7052 17.5625 4.5 17.3573 4.5 17.1042V10.5208Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M9.25012 14.5625C9.66432 14.9767 10.3359 14.9767 10.7501 14.5625C11.1643 14.1483 11.1643 13.4767 10.7501 13.0625C10.3359 12.6483 9.66432 12.6483 9.25012 13.0625C8.8359 13.4767 8.8359 14.1483 9.25012 14.5625Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M6.625 10.0625V7.9375C6.625 6.07355 8.13605 4.5625 10 4.5625C11.864 4.5625 13.375 6.07355 13.375 7.9375V10.0625"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Repeat new password"
                                value={newPass2}
                                   onChange={(e)=> setNewPass2(e.target.value)}
                            />
                                <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.5 10.5208C4.5 10.2677 4.7052 10.0625 4.95832 10.0625H15.0417C15.2948 10.0625 15.5 10.2677 15.5 10.5208V17.1042C15.5 17.3573 15.2948 17.5625 15.0417 17.5625H4.95832C4.7052 17.5625 4.5 17.3573 4.5 17.1042V10.5208Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M9.25012 14.5625C9.66432 14.9767 10.3359 14.9767 10.7501 14.5625C11.1643 14.1483 11.1643 13.4767 10.7501 13.0625C10.3359 12.6483 9.66432 12.6483 9.25012 13.0625C8.8359 13.4767 8.8359 14.1483 9.25012 14.5625Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M6.625 10.0625V7.9375C6.625 6.07355 8.13605 4.5625 10 4.5625C11.864 4.5625 13.375 6.07355 13.375 7.9375V10.0625"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                        </div>
                        <div className="button button4"
                            onClick={Save}
                        >{translate("Save")}</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PasswordChange;