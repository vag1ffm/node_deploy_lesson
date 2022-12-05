import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../../i18n/translate";

const Step3 = () => {
    return (
        <>
            <div className="img">
                <img src={'../static/frontend/img/13.png'} alt={'img'}/>
            </div>
            <div className="texts">
                <h4>{translate('Step 3')}</h4>
                <h3>{translate('Get Cashback')}</h3>
                <p style={{maxWidth:'200px'}}>{translate('Get information on your purchase and receive a cashback')}</p>
            </div>
            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
                <div className="point active"></div>
            </div>

            <Link to={'/start3/step2'}>
                <div className="back_step">
                    <i>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_944_34)">
                                <path d="M6.81872 9.88238L3.75725 6.51476C3.49881 6.23048 3.49881 5.76958 3.75725 5.48529L6.81872 2.11768" stroke="#EA6062" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_944_34">
                                    <rect width="11" height="10" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </i>
                    <span>{translate('Back')}</span>
                </div>
            </Link>
        </>
    );
};

export default Step3;