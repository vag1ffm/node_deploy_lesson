import React, {useState} from 'react';
import translate from "../../../i18n/translate";

const LogOutButton = ({style, setStyle, logOut}) => {



    function hideLogOut() {
        setStyle({
            display: 'none'
        })
    }

    return (
        <div className="sure" style={style}>
            <h2>Medico</h2>
            <span>
                {translate('Are you sure you want to log out?')}

                    </span>
            <div className="cancel_logout">
                <div className="item"
                     onClick={hideLogOut}
                >
                    {translate('Cancel')}
                </div>
                <div className="item"
                     onClick={logOut}
                >
                    {translate('Log out')}
                </div>
            </div>
        </div>
    );
};

export default LogOutButton;