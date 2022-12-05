import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import translate from "../../../../i18n/translate";


const Step0 = () => {





    return (
        <>
            <div className="img">
                <img src={'../static/frontend/img/1.png'} alt={'img'}/>
            </div>
            <div className="texts">
                <h3>{translate('Hello!')}</h3>
                <h4>{translate("It's great that you are with us now.")}</h4>
                <p style={{maxWidth:'250px'}}>
                           <span className="medico">
                       {translate('Now with the medico mobile application you will get your money back for the purchase of medicines')}
                    </span>
                </p>
                </div>
            <div className="points">
                <div className="point active"></div>
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
            </div>
            <Link to={'/start3/step1'}>
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

export default Step0;