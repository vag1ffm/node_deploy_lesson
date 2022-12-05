import React from 'react';
import translate from "../../../i18n/translate";

const WaitPlease = ({isLoading}) => {


    return (
        <div className="wait_please_width"
            style={{display: (isLoading)? 'flex': 'none'}}
        >
            <main className="wait_please">
                <div className="img">
                    <img src=".../static/frontend/img/7.png" alt=""/>
                </div>
                <h2>{translate("Wait please")}</h2>
            </main>
        </div>
    );
};

export default WaitPlease;