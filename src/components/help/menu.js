import React from 'react';
import {Link} from "react-router-dom";
import translate from "../../i18n/translate";

const Menu = ({page}) => {
    return (
        <div className="fixed_menu">
            <div className="items">
                <div className="item">
                    <Link to={'/'}>
                        <i>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.8333 16.6667V10.145C18.8333 9.69128 18.7408 9.24232 18.5612 8.82563C18.3817 8.40893 18.1189 8.03328 17.7891 7.72168L11.645 1.91501C11.3355 1.62245 10.9258 1.45944 10.5 1.45944C10.0741 1.45944 9.66441 1.62245 9.35496 1.91501L3.21079 7.72168C2.88098 8.03328 2.61825 8.40893 2.43871 8.82563C2.25916 9.24232 2.16658 9.69128 2.16663 10.145V16.6667C2.16663 17.1087 2.34222 17.5326 2.65478 17.8452C2.96734 18.1578 3.39127 18.3333 3.83329 18.3333H17.1666C17.6087 18.3333 18.0326 18.1578 18.3451 17.8452C18.6577 17.5326 18.8333 17.1087 18.8333 16.6667Z"
                                    stroke={page==='home'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <span style={{color: (page === 'home'? '#00CA61': '#38453E')}}>
                        {translate('Home')}
                        </span>
                     </Link>
                </div>
                <div className="item">
                    <Link to={'/search/all'}>
                        <i>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.66667 15.8333C13.3486 15.8333 16.3333 12.8486 16.3333 9.16667C16.3333 5.48477 13.3486 2.5 9.66667 2.5C5.98477 2.5 3 5.48477 3 9.16667C3 12.8486 5.98477 15.8333 9.66667 15.8333Z"
                                    stroke={page==='search'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M18 17.5L14.375 13.875"
                                      stroke={page==='search'? '#00CA61': '#38453E'}
                                      strokeWidth="0.833333"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <span style={{color: (page === 'search'? '#00CA61': '#000000')}}>
                            {translate('Search')}
                        </span>
                    </Link>
                </div>
                <div className="item scan_button" >
                    <Link to={'/scanner'}>
                        <i >
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.25" y="0.25" width="55.5" height="55.5" rx="27.75" fill="#CCF4DF"/>
                                <path
                                    d="M17 22.5571V19C17 17.8954 17.8954 17 19 17H23.1505M33.0861 17.1466L36.7634 17.1466C37.868 17.1466 38.7634 18.042 38.7634 19.1466V23.1668M39 33.2113V36.7685C39 37.873 38.1046 38.7685 37 38.7685H32.8495M22.682 39H19.0046C17.9 39 17.0046 38.1046 17.0046 37L17.0046 32.9798"
                                    stroke='#38453E' strokeWidth="2" strokeLinejoin="round"/>
                                <circle cx="28" cy="28" r="1" fill="#00CA61" stroke="#00CA61" strokeWidth="2"/>
                                <rect x="0.25" y="0.25" width="55.5" height="55.5" rx="27.75"
                                      stroke='#38453E'
                                      strokeWidth="0.5"/>
                            </svg>
                        </i>
                    </Link>
                </div>
                <div className="item">
                    <Link to={'/bonuses'}>
                        <i>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.3333 6.66666H4.66667C3.74619 6.66666 3 7.41285 3 8.33332V16.6667C3 17.5871 3.74619 18.3333 4.66667 18.3333H16.3333C17.2538 18.3333 18 17.5871 18 16.6667V8.33332C18 7.41285 17.2538 6.66666 16.3333 6.66666Z"
                                    stroke={page==='bonuses'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M10.5 4.16666C10.5 3.6722 10.3534 3.18886 10.0787 2.77773C9.80397 2.36661 9.41352 2.04618 8.95671 1.85696C8.49989 1.66774 7.99723 1.61823 7.51228 1.71469C7.02732 1.81116 6.58187 2.04926 6.23223 2.39889C5.8826 2.74852 5.6445 3.19398 5.54804 3.67893C5.45157 4.16388 5.50108 4.66655 5.6903 5.12337C5.87952 5.58018 6.19995 5.97063 6.61108 6.24533C7.0222 6.52003 7.50555 6.66666 8 6.66666"
                                    stroke={page==='bonuses'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M13 6.66666C13.4945 6.66666 13.9778 6.52003 14.3889 6.24533C14.8 5.97063 15.1205 5.58018 15.3097 5.12337C15.4989 4.66655 15.5484 4.16388 15.452 3.67893C15.3555 3.19398 15.1174 2.74852 14.7678 2.39889C14.4181 2.04926 13.9727 1.81116 13.4877 1.71469C13.0028 1.61823 12.5001 1.66774 12.0433 1.85696C11.5865 2.04618 11.196 2.36661 10.9213 2.77773C10.6466 3.18886 10.5 3.6722 10.5 4.16666"
                                    stroke={page==='bonuses'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M10.5 4.16666V18.3333"
                                      stroke={page==='bonuses'? '#00CA61': '#38453E'}
                                      strokeWidth="0.833333"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18 12.5H3"
                                      stroke={page==='bonuses'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <span style={{color: (page === 'bonuses'? '#00CA61': '#000000')}}>
                            {translate('Bonuses')}
                        </span>
                    </Link>

                </div>
                <div className="item">
                    <Link to={'/profile'}>
                        <i>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
                                    stroke={page==='profile'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                                    stroke={page==='profile'? '#00CA61': '#38453E'} strokeWidth="0.833333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <span style={{color: (page === 'profile'? '#00CA61': '#000000')}}>
                            {translate('Profile')}
                        </span>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Menu;