import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../../../i18n/translate";

const Step2 = () => {
    return (
        <>
            <div className="img">
                <img src={'../static/frontend/img/12.png'} alt={'img'}/>
            </div>
            <div className="texts">
                <h4>{translate('Step 2')}</h4>
                <h3>{translate('Add a recipt')}</h3>
                <p style={{maxWidth:'200px'}}>{translate('Scan the QR code on the recipt you have from a pharmacy')}</p>

            </div>
            <div className="points">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point active"></div>
                <div className="point"></div>
            </div>
            <Link to={'/start3/step1'}>
                <div className="back_step">
                    <i>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_944_34)">
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
            <Link to={'/start3/step3'}>
                <div className="next">
                    <span>{translate('Next')}</span>
                    <i>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_739_2074)">
                                <path
                                    d="M3.18128 9.88235L6.24275 6.51473C6.50119 6.23045 6.50119 5.76955 6.24275 5.48526L3.18128 2.11765"
                                    stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_739_2074">
                                    <rect width="11" height="10" fill="white" transform="translate(10 0.5) rotate(90)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </i>
                </div>
            </Link>
        </>
    );
};

export default Step2;