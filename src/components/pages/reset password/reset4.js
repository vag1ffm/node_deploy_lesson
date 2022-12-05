import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../i18n/translate";

const Reset4 = () => {
    return (
        <main>
            <div className="back"  style={{position: 'absolute'}}>
                <Link to={'/login'}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>

            </div>
            <div className="img reset2">
                <img src="/img/4.png" alt=""/>
            </div>
            <div className="reset-pass4">
                <h2>{translate('Password reset complete')}</h2>
                <p>
                    {translate('Your password has been set.\n You may go ahead and login now')}
                </p>
                <div className="button button6">
                    <Link to={'/login'}>
                        {translate('Log in')}

                    </Link>

                </div>
            </div>


        </main>

);
};

export default Reset4;