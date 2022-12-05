import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { Login} from "../../../store/reducers/authorization/axios";
import translate from "../../../i18n/translate";
import {FormattedMessage} from "react-intl";

const LogIn = () => {
    let [login, setLogin] = useState('')
    let [password, setPassword] = useState('')
    let history = useNavigate()

    function loginHandler(e) {
        if (e.target.value.length >= 100) {
            console.log(9)
            setAlert(translate('Ensure this field has no more than 100 characters.'))
            return
        }

        setLogin(e.target.value)
    }
    function passwordHandler(e) {

        setPassword(e.target.value)
    }


    const dispatch = useDispatch()

    function Authorization() {
        if (login.length ===0 || password.length===0) {
            setAlert(translate('This field is required.'))
            return
        }
        if (password.length <=8) {
            setAlert(translate('This password is too short. It must contain at least 8 characters.'))
            return;
        }
        let data = {
            "email" : login.toLowerCase(),
            "password" : password
        }
        dispatch(Login(data, history))
    }

    let [alert, setAlert] = useState('')
    function hideAlert() {
        setAlert('')
    }
    function checkLength(e){
        if (e.target.value.length <=8) {
            setAlert(translate('This password is too short. It must contain at least 8 characters.'))

        }
    }


    return (
        <main>

            <Link to={'/start3'}>
                <div className="back" style={{position: 'absolute'}}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Link>
            <div className="log-in">
                <h2>{translate('Log in')}</h2>
                <div className="inputs">
                    <div className="input">
                        <i>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5 18.0001H5.5C4.94772 18.0001 4.5 17.5524 4.5 17.0001V16.666C4.5 15.2128 5.40152 13.9122 6.76225 13.4022C9.17222 12.4989 11.8278 12.4989 14.2378 13.4022C15.5985 13.9122 16.5 15.2128 16.5 16.666V17.0001C16.5 17.5524 16.0523 18.0001 15.5 18.0001Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M8.97525 10.2168C9.93225 10.7084 11.0676 10.7084 12.0245 10.2168C12.9152 9.75933 13.5533 8.92605 13.7628 7.94695L13.8187 7.68563C14.033 6.68438 13.8041 5.6394 13.191 4.81933L13.1012 4.69925C12.488 3.87908 11.524 3.39613 10.4999 3.39613C9.47585 3.39613 8.51175 3.87908 7.89858 4.69925L7.8088 4.81933C7.19568 5.6394 6.96685 6.68438 7.18108 7.68563L7.237 7.94695C7.4465 8.92605 8.08463 9.75933 8.97525 10.2168Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <FormattedMessage id={'Email'}>
                            {(msg) => (  <input type="email" placeholder={msg}
                                                value={login}
                                                onChange={loginHandler}
                            />)}
                        </FormattedMessage>

                    </div>
                    <div className="input">
                        <i>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 10.5208C5 10.2677 5.2052 10.0625 5.45832 10.0625H15.5417C15.7948 10.0625 16 10.2677 16 10.5208V17.1042C16 17.3573 15.7948 17.5625 15.5417 17.5625H5.45832C5.2052 17.5625 5 17.3573 5 17.1042V10.5208Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9.75 14.5625C10.1642 14.9767 10.8358 14.9767 11.25 14.5625C11.6642 14.1483 11.6642 13.4767 11.25 13.0625C10.8358 12.6483 10.1642 12.6483 9.75 13.0625C9.33577 13.4767 9.33577 14.1483 9.75 14.5625Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M7.125 10.0625V7.9375C7.125 6.07355 8.63605 4.5625 10.5 4.5625C12.364 4.5625 13.875 6.07355 13.875 7.9375V10.0625"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <FormattedMessage id={'Password'}>
                            {(msg) => (   <input type="password" placeholder={msg}
                                                 value={password}
                                                 onBlur={(e)=> checkLength(e)}
                                                 onChange={passwordHandler}
                            />)}
                        </FormattedMessage>

                    </div>
                </div>
                <div className="forgot-pass">
                    <Link to={'/resetPass'}>
                        {translate('Forgot password?')}
                    </Link>
                </div>

                <div className="button button4"
                    onClick={Authorization}
                >
                    {translate('Log in')}

                </div>
                <p>{translate('You can also log in with')}</p>
                <div className="icons">
                    <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.9072 27.889C22.7892 27.889 20.3144 27.8898 19.173 27.8887C18.5854 27.8883 18.3757 27.6828 18.3757 27.1073C18.375 25.6291 18.3746 24.1509 18.3757 22.6727C18.3761 22.1045 18.5978 21.8877 19.1779 21.8873C20.3193 21.8866 22.7805 21.8869 22.9072 21.8869C22.9072 21.7857 22.9068 19.6515 22.9072 18.6687C22.9079 17.2157 23.1743 15.8249 23.9328 14.5514C24.7094 13.248 25.8396 12.3551 27.2879 11.8388C28.2156 11.5079 29.1785 11.376 30.1629 11.3752C31.3945 11.3745 32.626 11.3756 33.858 11.3778C34.3874 11.3785 34.6222 11.6063 34.6233 12.1251C34.6256 13.5156 34.6256 14.9061 34.6233 16.2962C34.6226 16.8205 34.3975 17.0311 33.8561 17.0369C32.8466 17.0475 31.8363 17.0409 30.8279 17.0804C29.8093 17.0804 29.2736 17.5645 29.2736 18.5905C29.2491 19.6756 29.2634 20.7619 29.2634 21.8866C29.3589 21.8866 32.2575 21.8862 33.6123 21.8866C34.2277 21.8866 34.4381 22.0924 34.4381 22.6946C34.4381 24.1648 34.4377 25.6353 34.4366 27.1055C34.4362 27.6989 34.2386 27.8883 33.6194 27.8887C32.2646 27.8894 29.3773 27.889 29.251 27.889V39.7883C29.251 40.4226 29.0459 40.6248 28.4027 40.6248C26.8345 40.6248 25.2659 40.6252 23.6976 40.6248C23.1292 40.6248 22.9075 40.4099 22.9075 39.8567C22.9072 35.9814 22.9072 28.025 22.9072 27.889Z"
                            fill="#4661AF" fillOpacity="0.5"/>
                        <rect x="1" y="0.5" width="51" height="51" rx="25.5" stroke="#4661AF" strokeOpacity="0.3"/>
                    </svg>

                    <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40.0205 23.4571L28.0897 23.4565C27.5629 23.4565 27.1359 23.8835 27.1359 24.4104V28.2217C27.1359 28.7485 27.5629 29.1755 28.0897 29.1755H34.8084C34.0727 31.0849 32.6995 32.6838 30.9476 33.6998L33.8125 38.6591C38.408 36.0013 41.125 31.3379 41.125 26.1176C41.125 25.3743 41.0702 24.8429 40.9606 24.2446C40.8773 23.7901 40.4827 23.4571 40.0205 23.4571Z"
                            fill="#167EE6" fillOpacity="0.3"/>
                        <path
                            d="M26.5001 34.9022C23.2121 34.9022 20.3417 33.1057 18.8 30.4473L13.8409 33.3057C16.3646 37.6796 21.0922 40.625 26.5001 40.625C29.1529 40.625 31.6562 39.9107 33.8125 38.6659V38.6591L30.9477 33.6998C29.6373 34.4598 28.1209 34.9022 26.5001 34.9022Z"
                            fill="#12B347" fillOpacity="0.3"/>
                        <path
                            d="M33.8125 38.6659V38.6591L30.9477 33.6997C29.6372 34.4597 28.1209 34.9021 26.5 34.9021V40.625C29.1529 40.625 31.6562 39.9107 33.8125 38.6659Z"
                            fill="#0F993E" fillOpacity="0.3"/>
                        <path
                            d="M17.5978 26C17.5978 24.3793 18.0401 22.8631 18.8 21.5527L13.8409 18.6943C12.5892 20.8439 11.875 23.3403 11.875 26C11.875 28.6597 12.5892 31.1561 13.8409 33.3057L18.8 30.4473C18.0401 29.137 17.5978 27.6207 17.5978 26Z"
                            fill="#FFD500" fillOpacity="0.3"/>
                        <path
                            d="M26.5 17.0978C28.6442 17.0978 30.6136 17.8597 32.1519 19.127C32.5314 19.4396 33.083 19.417 33.4306 19.0694L36.1311 16.3689C36.5255 15.9745 36.4974 15.3289 36.0761 14.9634C33.4987 12.7274 30.1453 11.375 26.5 11.375C21.0922 11.375 16.3646 14.3204 13.8409 18.6943L18.8 21.5527C20.3417 18.8943 23.2121 17.0978 26.5 17.0978Z"
                            fill="#FF4B26" fillOpacity="0.3"/>
                        <path
                            d="M32.1519 19.127C32.5314 19.4396 33.083 19.417 33.4306 19.0694L36.1311 16.3689C36.5254 15.9745 36.4973 15.3289 36.0761 14.9634C33.4987 12.7274 30.1452 11.375 26.5 11.375V17.0978C28.644 17.0978 30.6136 17.8597 32.1519 19.127Z"
                            fill="#D93F21" fillOpacity="0.3"/>
                        <rect x="1" y="0.5" width="51" height="51" rx="25.5" stroke="#FF4B26" strokeOpacity="0.2"/>
                    </svg>
                </div>

            </div>
            <div className="sure" style={{display: alert? 'flex': 'none'}}>
                <h2>Medico</h2>
                <span>
                    {alert}
                </span>
                <div className="cancel_logout">
                    <div className="item back"
                        onClick={hideAlert}
                    >
                        {translate('Back')}
                    </div>

                </div>
            </div>

        </main>

    );
};

export default LogIn;