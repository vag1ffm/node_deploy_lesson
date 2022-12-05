import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const HeaderMoney = () => {
    let {balance, isLoading, error} = useSelector(state => state.balanceSlice)



    return (
        <Link to={'/balance'}>
            <div className="round">
                <span className={'' + (isLoading && 'loading-money')}>
                    {isLoading && '99999'}
                    {balance.real_balance}
                    {/*{error && "Error"}*/}
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_759_1053)">
                        <path
                            d="M10 0.625C4.8125 0.625 0.625 4.8125 0.625 10C0.625 15.1875 4.8125 19.375 10 19.375C15.1875 19.375 19.375 15.1875 19.375 10C19.375 4.8125 15.1875 0.625 10 0.625ZM15.625 13.125C15.625 13.4375 15.3125 13.75 15 13.75C14.6875 13.75 14.375 13.4375 14.375 13.125V11.875C14.375 9.6875 12.75 7.875 10.625 7.5625V13.125C10.625 13.4375 10.3125 13.75 10 13.75C9.6875 13.75 9.375 13.4375 9.375 13.125V7.5625C7.25 7.875 5.625 9.6875 5.625 11.875V13.125C5.625 13.4375 5.375 13.75 5 13.75C4.625 13.75 4.375 13.4375 4.375 13.125V11.875C4.375 9 6.5625 6.625 9.375 6.3125V5.625C9.375 5.25 9.625 5 10 5C10.3125 5 10.625 5.25 10.625 5.625V6.3125C13.4375 6.625 15.625 9 15.625 11.875V13.125Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_759_1053">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </Link>
    );
};

export default HeaderMoney;