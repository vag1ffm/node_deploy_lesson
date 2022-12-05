import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../i18n/translate";

const Start2 = () => {
    return (
        <div className="bcground">
            <main>
                <div className="center">
                    <div className="company-name medico2">
                        <span>medi</span>
                        <span>co</span>
                    </div>
                    <p>{translate('Cashback')}</p>
                </div>
                <Link to={'/start3'}>
                    <div className="button button13">
                        {translate('Get Started')}
                    </div>
                </Link>

            </main>
        </div>

    );
};

export default Start2;