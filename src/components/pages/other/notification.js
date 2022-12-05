import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../i18n/translate";

const Notification = () => {
    return (
        <>
            <header>
                <div className="back">
                    <Link to={'/'}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <h2>{translate('Notifications')}</h2>
            </header>
            <div className="main_content">
                <div className="note">
                    <h2>
                        {translate('Welcome to the new section!')}
                    </h2>
                    <p>
                        {translate('Here we will collect important messages for you: about cashback accrual for purchases, profitable promotions, bonuses and much more!')}
                       </p>
                    <span>8.10.2022 {translate('at')} 00:00</span>
                </div>
            </div>
            <div className="main_content">
                <div className="note">
                    <h2>{translate('Cashback for your purchases!')}😇</h2>
                    <p>
                        {translate('Take advantage of amazing offers only at Medico: scan receipts, buy medicines at partner pharmacies and get cashback!')}
                        </p>
                    <span>8.10.2022 {translate('at')} 00:00</span>
                </div>
            </div>
        </>
    );
};

export default Notification;