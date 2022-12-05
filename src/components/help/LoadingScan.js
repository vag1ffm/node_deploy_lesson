import React from 'react';
import translate from "../../i18n/translate";

const LoadingScan = () => {
    return (
        <div className="wait_please_width"
             style={{display:'flex'}}
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

export default LoadingScan;