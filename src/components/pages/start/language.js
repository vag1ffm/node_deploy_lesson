import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import translate from "../../../i18n/translate";
import {useDispatch} from "react-redux";
import {languageSlice} from "../../../store/reducers/Language/languageSlice";

const Language = () => {
    // let [lang, setLang] = useState(null)
    let [active, setActive] = useState('no_active')
    let history = useNavigate()


    function checked() {
        setActive('active')
    }


    let dispatch = useDispatch()
    function changLanguage (lang) {
        dispatch(languageSlice.actions.changeLanguage(lang))
    }





    return (
        <main>
            <Link to={'/start3'}>
                <div className="exit">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.7204 26.7692L13.2797 13.3285" stroke="#041E1B" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M13.2797 26.7692L26.7204 13.3285" stroke="#041E1B" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </Link>

            <div className="img lang-img">
                <img src="../static/frontend/img/2.png" alt={'img'}/>
            </div>
            <div className="app-lang">
                <h2>
                    {translate('App Language')}
                </h2>
                <ul>
                    <li>
                        <label htmlFor="English" onClick={()=>changLanguage('english')}>
                            <span>{translate('English')}</span>
                            <input type="radio" name="lang" id="English"
                                   onChange={checked}
                            />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="Azerbaijani" onClick={()=>changLanguage('azerbaijani')}>
                            <span>{translate('Azerbaijani')}</span>
                            <input type="radio" name="lang" id="Azerbaijani"
                                   onChange={checked}
                            />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="Russian" onClick={()=>changLanguage('russian')}>
                            <span>{translate('Russian')}</span>
                            <input type="radio" name="lang" id="Russian"
                                   onChange={checked}
                            />
                        </label>
                    </li>
                </ul>
            </div>
            {/*<Link to={'/start3'}>*/}
                <button className={'button ' + active}
                    disabled={active !== 'active'}
                        onClick={() => history('/start3')}
                >
                    {translate('Apply')}
                </button>
            {/*</Link>*/}

        </main>
    );
};

export default Language;