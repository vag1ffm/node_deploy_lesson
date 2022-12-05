import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFiscalInfo} from "../../../store/reducers/cheques/axios";
import translate from "../../../i18n/translate";

const OperationInform = () => {

    let {fiscal} = useParams()
    console.log(fiscal)

    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getFiscalInfo(fiscal))
    }, [])
    let {lastCheque, isLoading} = useSelector(state => state.chequeSlicer)
    console.log(lastCheque)

    function Date(date) {
        if (date) {
            let list = date.split('-')
            return `${list[2]}.${list[1]}.${list[0]}`
        }

    }
    function shortWord(word) {
        if (word) {
            if (word.length >= 10) return word.slice(0,10) + '...'
            return word
        }


    }

    return (
        <>
            <header className="EAFEF3">
                <Link to={'/'}>
                    <div className="back">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </Link>

                <h2>{translate('Operation Information')}</h2>
            </header>
            <div className="main_content first-level operation-information">
                <div className="inforamtion-info">
                    <div className="header">
                        <div className="left">
                            <div className="img">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M9.58114 18.1533V18.191C9.58114 18.191 9.5436 18.191 9.5436 18.2286H9.58114C9.58114 18.266 9.58114 18.266 9.61868 18.266H10.671C10.671 18.266 10.7086 18.266 10.7086 18.2286V18.191C10.7086 18.191 10.1825 17.1386 10.1448 17.1386L9.58114 18.1533V18.1533ZM8.97984 19.281H8.15295L9.50606 16.8004L9.39333 16.7252H10.7463L12.0993 19.281H11.235L11.0094 18.7548H9.28049L8.97984 19.281ZM13.4147 19.281H12.5504L12.5879 19.1682V16.8003L12.5504 16.7251H13.4147L13.3772 16.8003V19.1682L13.4147 19.281ZM16.008 18.0406C16.0456 18.0406 16.3087 17.9278 16.3087 17.6647C16.3087 17.2512 15.9704 17.2137 15.9704 17.2137L14.7678 17.1762C14.7301 17.2137 14.7301 18.0782 14.7678 18.0782L16.008 18.0406V18.0406ZM13.9409 16.7251H16.0456C16.2335 16.7251 17.0604 16.8003 17.0604 17.6271C17.0604 18.3787 16.2712 18.6043 16.0456 18.6043H14.8053C14.7678 18.6043 14.7678 18.6043 14.7301 18.642V19.1681L14.7678 19.2808H13.9409V16.7251V16.7251ZM19.5033 19.281H18.5637L18.639 19.1306V17.2513L17.4738 17.3641V16.7251H20.5558V17.3265L19.3905 17.2513V19.1306L19.5033 19.281ZM23.9007 19.281H21.082V16.7251H23.9383V17.2889H21.8712C21.8335 17.3264 21.8335 17.3264 21.8335 17.364V17.6647C21.8335 17.7023 21.8335 17.7023 21.8712 17.7398H23.7881V18.2285H21.9088H21.8712H21.8335V18.6794H23.9007V19.281V19.281ZM25.2913 18.5668V19.281H24.5021V16.7251H25.2913V17.9278C25.2913 17.9278 26.569 16.8378 26.7947 16.8003C27.1329 16.6876 27.8471 16.7251 27.8471 16.7251V17.0634C27.6216 17.0634 27.2456 17.0259 26.9825 17.1762C26.7947 17.2889 26.5317 17.552 26.5317 17.552L27.8471 19.2808H26.9451L26.0429 18.0029L25.2913 18.5668Z"
                                          fill="#236CB1"/>
                                </svg>

                            </div>
                            <h2 className={'' +  (isLoading && 'loading2')}>
                                {/*<Loading user={lastCheque.store}/>*/}
                                {'lastCheque' && shortWord(lastCheque.store)}
                            </h2>
                        </div>
                        <div className="right">
                            <span className={'' + (isLoading && 'loading2')}>3% {translate('Cashback')}</span>
                        </div>

                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="left">{translate('Operation date:')}</div>
                                <div className={"info_data " + (isLoading && 'loading2')}>
                                    {'lastCheque' && Date(lastCheque.time_added)}
                                </div>
                            </li>
                            <li>
                                <div className="left">{translate('Operation sum:')}</div>
                                <div className={'info_manats ' +  (isLoading && 'loading2')}>

                                    {'lastCheque' && lastCheque.check_sum} ₼
                                </div>
                            </li>
                            <li>
                                <div className="left">{translate('Accumulated bonus')}</div>
                                <div className={"info_bonus "  + (isLoading && 'loading2')}>
                                    +{'lastCheque' && lastCheque.cashback_value}₼
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OperationInform;