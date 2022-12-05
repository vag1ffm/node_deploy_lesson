import React from 'react';

const Cheque = ({store, cashback_value, check_sum, filter, key}) => {

    function shortWord(word) {
        if (word.length >= 10) return word.slice(0,10) + '...'
        return word

    }

    let color = '#00CA61'
    if (filter === 'on_balance') {
        color='#00CA61'
    } else if (filter === 'pending'){
        color='#D3B92E'
    } else if (filter === 'deleted'){
        color='#E5383B'
    }


    return (
        <div className="trans_items" key={key}>
            <div className="trans_item">
                <div className="left">
                    <div className="img">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_759_4023)">
                                <rect width="50" height="50" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M13.3071 25.2129V25.2652C13.3071 25.2652 13.2549 25.2652 13.2549 25.3175H13.3071C13.3071 25.3695 13.3071 25.3695 13.3592 25.3695H14.8208C14.8208 25.3695 14.8729 25.3695 14.8729 25.3175V25.2652C14.8729 25.2652 14.1422 23.8036 14.0899 23.8036L13.3071 25.2129ZM12.4719 26.7791H11.3235L13.2028 23.3339L13.0462 23.2295H14.9254L16.8046 26.7791H15.6041L15.2908 26.0484H12.8895L12.4719 26.7791ZM18.6314 26.7791H17.431L17.4831 26.6225V23.3337L17.431 23.2293H18.6314L18.5794 23.3337V26.6225L18.6314 26.7791ZM22.2333 25.0563C22.2855 25.0563 22.6509 24.8998 22.6509 24.5343C22.6509 23.96 22.181 23.9079 22.181 23.9079L20.5107 23.8557C20.4585 23.9079 20.4585 25.1086 20.5107 25.1086L22.2333 25.0563ZM19.3623 23.2293H22.2855C22.5465 23.2293 23.6949 23.3337 23.6949 24.482C23.6949 25.5259 22.5988 25.8393 22.2855 25.8393H20.5629C20.5107 25.8393 20.5107 25.8393 20.4585 25.8916V26.6224L20.5107 26.7789H19.3623V23.2293ZM27.0878 26.7791H25.7828L25.8874 26.5702V23.9602L24.2691 24.1168V23.2293H28.5497V24.0646L26.9312 23.9602V26.5702L27.0878 26.7791ZM33.1953 26.7791H29.2804V23.2293H33.2476V24.0123H30.3766C30.3243 24.0645 30.3243 24.0645 30.3243 24.1166V24.5343C30.3243 24.5865 30.3243 24.5865 30.3766 24.6386H33.0389V25.3173H30.4289H30.3766H30.3243V25.9436H33.1953V26.7791ZM35.1268 25.7872V26.7791H34.0306V23.2293H35.1268V24.8998C35.1268 24.8998 36.9014 23.3859 37.2148 23.3337C37.6845 23.1772 38.6764 23.2293 38.6764 23.2293V23.6992C38.3633 23.6992 37.8411 23.647 37.4757 23.8557C37.2148 24.0123 36.8495 24.3778 36.8495 24.3778L38.6764 26.7789H37.4237L36.1706 25.004L35.1268 25.7872Z"
                                      fill="#236CB1"/>
                            </g>
                            <rect x="0.15" y="0.15" width="49.7" height="49.7" rx="24.85" stroke="#B5DFC8"
                                  strokeWidth="0.3"/>
                            <defs>
                                <clipPath id="clip0_759_4023">
                                    <rect width="50" height="50" rx="25" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="title">
                        <h2>{shortWord(store)}</h2>
                    </div>
                </div>
                <div className="right">
                    <div className="plus"
                        style={{color: color}}
                    >+{cashback_value} ₼</div>
                    <div className="plus_from"
                        style={{display: filter === 'deleted'? 'none':"block"}}
                    >{check_sum} ₼</div>
                </div>
            </div>
        </div>
    );
};

export default Cheque;