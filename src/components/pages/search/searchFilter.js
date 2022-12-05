import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import translate from "../../../i18n/translate";

const SearchFilter = () => {

    // let { page } = useParams();
    // let dispatch = useDispatch()
    //
    // useEffect(()=> {
    //     // dispatch()
    // }, [])

    return (
        <div className="items">
            <Link to={'/map'}>
                <div className="item">
                    <div className="left">
                        <div className="round">
                            {translate("Cashback")} 3%
                        </div>
                        <div className="center">
                            <h3>Aptek</h3>
                            <span>{translate("For every purchase")}</span>
                        </div>
                        <div className="know_more">
                            <span>
                                {translate("To know more")}
                            </span>
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_803_1633)">
                                    <path
                                        d="M3.18122 9.88235L6.24269 6.51474C6.50113 6.23045 6.50113 5.76955 6.24269 5.48527L3.18122 2.11765"
                                        stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_803_1633">
                                        <rect width="11" height="10" fill="white"
                                              transform="translate(10 0.5) rotate(90)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="right">
                        <img src="../static/frontend/img/8.png" alt=""/>
                    </div>
                </div>

            </Link>
        </div>

    );
};

export default SearchFilter;