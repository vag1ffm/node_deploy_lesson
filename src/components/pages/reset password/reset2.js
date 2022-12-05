import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../i18n/translate";

const Reset2 = () => {
    return (
        <main>
            <div className="back"  style={{position: 'absolute'}}>
                <Link to={'/start'}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
            <div className="img reset2">
                <img src="/img/3.png" alt=""/>
            </div>
            <div className="reset-pass">
                <h2>{translate('Check your Email')}</h2>
                <p>
                    {translate('We have sent a password recover instructions to your email')}

                </p>
                <div className="button button5">
                    <Link to={'/start'}>
                        Open email app
                    </Link>

                </div>
            </div>
            <div className="did-not">
                {translate('Did not receive the email? Check your spam filter, or try another email address')}
            </div>

        </main>
    );
};

export default Reset2;