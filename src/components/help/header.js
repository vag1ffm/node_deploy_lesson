import React from 'react';
import HeaderMoney from "./headerMoney";
import {Link} from "react-router-dom";

const Header = ({page, url, setUrl}) => {

    return (
        <header className="search">
            <div className="first_floor"
                 style={{display: (page==='bonuses' || page=== 'map')? 'none': 'flex'}}
            >
                <Link to={'/notification'}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.8758 12.6666C18.4613 12.6666 17.1048 13.2285 16.1046 14.2287L15.8954 14.4378C14.8952 15.438 14.3333 16.7946 14.3333 18.2091V19.1884C14.3333 20.9887 13.6182 22.7153 12.3452 23.9883C12.1242 24.2093 12 24.509 12 24.8215C12 25.4723 12.5276 25.9999 13.1784 25.9999H26.8216C27.4724 25.9999 28 25.4723 28 24.8215C28 24.509 27.8758 24.2093 27.6548 23.9883C26.3818 22.7153 25.6667 20.9887 25.6667 19.1884V18.2091C25.6667 16.7946 25.1048 15.438 24.1046 14.4378L23.8954 14.2287C22.8952 13.2285 21.5387 12.6666 20.1242 12.6666H19.8758Z"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M22.0815 26C22.229 26.307 22.3092 26.6478 22.3092 27C22.3092 27.8251 21.8691 28.5875 21.1545 29C20.44 29.4125 19.5597 29.4125 18.8451 29C18.1306 28.5875 17.6904 27.8251 17.6904 27C17.6904 26.6478 17.7706 26.307 17.9182 26"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M20.4998 12.6667C20.5918 12.6667 20.6665 12.592 20.6665 12.5V11.6667C20.6665 11.2985 20.368 11 19.9998 11C19.6316 11 19.3331 11.2985 19.3331 11.6667V12.5C19.3331 12.592 19.4078 12.6667 19.4998 12.6667"
                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>

                <div className="right">
                    <HeaderMoney/>
                </div>
            </div>

            <div className="second_floor"
                style={{display: (page === 'search' || page ==="bonuses")? 'flex': 'none'}}
            >
                <div className="input">
                    <i>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                                stroke="#759383" strokeWidth="0.833333" strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <path d="M17.5 17.5L13.875 13.875" stroke="#759383" strokeWidth="0.833333"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </i>
                    <input type="text" placeholder="Enter the name of the pharmacy or product"/>
                </div>
            </div>

            <div className="first_floor"
                 style={{display: (page==='map')? 'flex': 'none'}}
            >
                <div className="back"
                    style={{position: "static", display: 'flex', alignItems: "center"}}
                >
                    <Link to={url}
                        onClick={()=> setUrl('/search/all')}
                    >
                        <svg
                            width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <h2>Notifications</h2>
                </div>

                <div className="right">
                    <HeaderMoney/>
                </div>
            </div>
        </header>
    );
};

export default Header;