import React from 'react';
import translate from "../../../i18n/translate";

const History = ({word, trans}) => {

    function Date(date) {
        let list = date.split('-')
        return `${list[2]}.${list[1]}.${list[0]}`
    }

    return (
        <div className="history">
            <div className="left">
                <div className="img">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17" cy="17" r="17" fill="#759383"/>
                        <circle cx="10.5" cy="16.5" r="1.5" fill="#D9D9D9"/>
                        <circle cx="17.5" cy="16.5" r="1.5" fill="#D9D9D9"/>
                        <circle cx="24.5" cy="16.5" r="1.5" fill="#D9D9D9"/>
                    </svg>
                </div>
                <div className="info">
                    <h3>{word}</h3>
                    <div className="number">{trans.cc_number || trans.phone_number}</div>
                    <div className="date">{Date(trans.transaction_date)}</div>
                </div>
            </div>
            <div className="right">
                <span>
                    {trans.withdrawal_amount}  {translate("azn")}
                </span>
            </div>
        </div>
    );
};

export default History;