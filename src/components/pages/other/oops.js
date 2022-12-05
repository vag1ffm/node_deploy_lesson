import React from 'react';
import translate from "../../../i18n/translate";

const Oops = () => {
    return (
        <main className="ooops">
            <img src="../static/frontend/img/10.png" alt=""/>
                <h2>{translate('Ooops!')}</h2>
                <span>{translate('No internet connection found\nCheck your connection')}</span>
                <div className="button button4">{translate('Try Again')}</div>
        </main>
    );
};

export default Oops;