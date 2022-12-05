import React, {useState} from 'react';
import Menu from "../../help/menu";
import ChequeByData from "./ChequeByData";
import {useDispatch, useSelector} from "react-redux";
import translate from "../../../i18n/translate";
import Header from "../../help/header";
import {getFilteredDateCheques, getFilteredSumCheques} from "../../../store/reducers/cheques/axios";



const Home = () => {
    let {balance, isLoading, error} = useSelector(state => state.balanceSlice)

    let dispatch = useDispatch()
    let [filter, setFilter] = useState('on_balance')

    let [data, setData] = useState('none')
    let [sum, setSum] = useState('none')

    const monthNumber = {
        '1': translate('January'),
        '2': translate('February'),
        '3': translate('March'),
        '4': translate('April'),
        '5': translate('May'),
        '6': translate('June'),
        '7': translate('July'),
        '8': translate('August'),
        '9': translate('September'),
        '10': translate('October'),
        '11': translate('November'),
        '12': translate('December'),
    };


    function filterDateCheques() {
        let from = document.querySelector('input.from_date').value
        let to = document.querySelector('input.to_date').value
        console.log(to || new Date().toJSON().slice(0,10))
        dispatch(getFilteredDateCheques(from, to, filter, 'date'))
    }


    function filterSumCheques() {
        let from = document.querySelector('input.min_sum').value
        let to = document.querySelector('input.max_sum').value
        dispatch(getFilteredSumCheques(from, to, filter ))
    }

    function handlerDate() {
        if (data === 'none') {
            setData('block')
            setSum('none')
        } else {
            setData('none')

        }
    }
    function handlerSum() {
        if (sum === 'none') {
            setSum('block')
            setData('none')

        } else {
            setSum('none')
        }
    }

    return (
        <>
            <Header page={'home'}/>
            <main className="home">
                <div className="earned">
                    <div className="money">
                        <span className={isLoading? "loading-money2" : ''}>
                            {isLoading && "aaaaaa"}
                            {balance.real_balance}
                            {/*{error && "Error"}*/}
                        </span>
                    </div>
                    <p>
                        {monthNumber[balance.month_number]} {translate('Earned')}
                    </p>
                </div>

                <div className="checks">
                    <h2>{translate('Checks')}</h2>
                    <div className="selects">
                        <div className="select" onClick={handlerDate}>
                            <span>
                                {translate('By date')}
                            </span>
                            <i>
                                <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_759_3999)">
                                        <path
                                            d="M1.4706 3.68128L4.53207 6.74275C4.79051 7.00119 5.20951 7.00119 5.46795 6.74275L8.52942 3.68128"
                                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_3999">
                                            <rect width="10" height="10" fill="white"
                                                  transform="translate(10 10.5) rotate(-180)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                        <div className="select" onClick={handlerSum}>
                            <span>{translate('Sum')}</span>
                            <i>
                                <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_759_3999)">
                                        <path
                                            d="M1.4706 3.68128L4.53207 6.74275C4.79051 7.00119 5.20951 7.00119 5.46795 6.74275L8.52942 3.68128"
                                            stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_3999">
                                            <rect width="10" height="10" fill="white"
                                                  transform="translate(10 10.5) rotate(-180)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>

                <div className="hidden_data_sum">
                    <div className="for_date" style={{display: data}}>
                        <div className="data">
                            <h3>{translate('(MM/DD/YYYY)')}</h3>
                            <div className="hidden_inputs">
                                <div className="input">
                                    <input type="date" className={'from_date'} placeholder="From"/>
                                    <i>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                                stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6667 1.33333V4" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M5.33325 1.33333V4" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M2 6.66667H14" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </i>
                                </div>
                                <div className="input">
                                    <input type="date" className={'to_date'} placeholder="To"/>
                                    <i>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                                                stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6667 1.33333V4" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M5.33325 1.33333V4" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M2 6.66667H14" stroke="#38453E" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="hidden_date_after">
                            <span onClick={filterDateCheques}>
                                {translate('Refine search')}
                            </span>
                            <i>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_759_3547)">
                                        <path
                                            d="M3.18122 9.88235L6.24269 6.51474C6.50113 6.23045 6.50113 5.76955 6.24269 5.48527L3.18122 2.11765"
                                            stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_3547">
                                            <rect width="11" height="10" fill="white"
                                                  transform="translate(10 0.5) rotate(90)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </i>
                        </div>
                    </div>

                    <div className="for_date" style={{display: sum}}>
                        <div className="data">
                            <h3>{translate('Sum')}</h3>
                            <div className="hidden_inputs">
                                <div className="input">
                                    <input type="number" className={'min_sum'} placeholder="min"/>
                                    <i>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.33203 12.9137H5.79297V9.22812C5.79297 7.28242 6.46367 6.25977 7.5793 6.03398V12.9137H8.53555V6.0207C9.68438 6.22656 10.3816 7.24922 10.3816 9.22812V12.9137H11.8426V9.18164C11.8426 6.42578 10.5609 4.88516 8.53555 4.69258V3.19844H7.5793V4.69922C5.58711 4.91836 4.33203 6.45234 4.33203 9.18164V12.9137Z"
                                                fill="#38453E"/>
                                        </svg>

                                    </i>
                                </div>
                                <div className="input">
                                    <input type="number"  className={'max_sum'}  placeholder="max"/>
                                    <i>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.33203 12.9137H5.79297V9.22812C5.79297 7.28242 6.46367 6.25977 7.5793 6.03398V12.9137H8.53555V6.0207C9.68438 6.22656 10.3816 7.24922 10.3816 9.22812V12.9137H11.8426V9.18164C11.8426 6.42578 10.5609 4.88516 8.53555 4.69258V3.19844H7.5793V4.69922C5.58711 4.91836 4.33203 6.45234 4.33203 9.18164V12.9137Z"
                                                fill="#38453E"/>
                                        </svg>

                                    </i>
                                </div>
                            </div>
                            <div className="worning">
                                <i>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.54349 7.31197L7.41049 5.32397C7.38449 4.92397 7.24799 4.27747 7.55349 3.95247C7.78599 3.70247 8.33649 3.65947 8.50349 4.00597C8.6455 4.41314 8.6769 4.8507 8.59449 5.27397L8.41649 7.32047C8.40884 7.51309 8.36667 7.70276 8.29199 7.88047C8.26259 7.93798 8.21803 7.98635 8.16311 8.02034C8.1082 8.05433 8.04504 8.07266 7.98046 8.07332C7.91588 8.07399 7.85234 8.05698 7.79674 8.02414C7.74113 7.99129 7.69557 7.94386 7.66499 7.88697C7.59462 7.70285 7.55362 7.50882 7.54349 7.31197ZM8.00399 10.0435C7.84632 10.0426 7.69491 9.98166 7.58056 9.87309C7.46622 9.76452 7.39754 9.61647 7.38849 9.45905C7.37945 9.30164 7.43072 9.14669 7.53187 9.02574C7.63302 8.90478 7.77646 8.82691 7.93299 8.80797C8.01709 8.7978 8.10237 8.80496 8.18359 8.82902C8.26481 8.85308 8.34024 8.89354 8.40522 8.94788C8.4702 9.00222 8.52335 9.0693 8.5614 9.14498C8.59945 9.22067 8.62159 9.30334 8.62645 9.38791C8.63131 9.47248 8.61879 9.55715 8.58966 9.63669C8.56053 9.71623 8.51541 9.78896 8.45708 9.85039C8.39876 9.91182 8.32846 9.96064 8.25053 9.99385C8.1726 10.0271 8.0887 10.0439 8.00399 10.0435Z"
                                            fill="#38453E"/>
                                        <path
                                            d="M13.5965 12H2.40354C2.14057 11.996 1.88318 11.9235 1.65676 11.7896C1.43034 11.6558 1.2427 11.4653 1.11233 11.2369C0.981969 11.0085 0.913381 10.75 0.91333 10.487C0.913279 10.224 0.981767 9.96549 1.11204 9.73701L6.71504 0.755513C6.85116 0.53672 7.04088 0.356302 7.26624 0.231352C7.49159 0.106401 7.74512 0.0410556 8.0028 0.0415062C8.26047 0.0419569 8.51377 0.108189 8.73869 0.233927C8.9636 0.359665 9.15269 0.540745 9.28804 0.760013L14.882 9.72651C15.0145 9.95486 15.085 10.2139 15.0864 10.4778C15.0879 10.7418 15.0203 11.0016 14.8904 11.2314C14.7604 11.4612 14.5727 11.653 14.3457 11.7878C14.1188 11.9227 13.8605 11.9958 13.5965 12ZM7.56954 1.27451L1.96704 10.256C1.92573 10.3323 1.9048 10.4179 1.90628 10.5047C1.90776 10.5914 1.93161 10.6763 1.9755 10.7511C2.0194 10.8259 2.08186 10.8881 2.15685 10.9317C2.23183 10.9754 2.31681 10.9989 2.40354 11H13.5965C13.6842 10.9987 13.7701 10.9745 13.8455 10.9299C13.921 10.8853 13.9836 10.8218 14.0271 10.7456C14.0705 10.6694 14.0934 10.5832 14.0934 10.4956C14.0934 10.4079 14.0705 10.3217 14.027 10.2455C14.027 10.2455 8.43304 1.27751 8.43054 1.27451C8.3845 1.20203 8.32091 1.14234 8.24565 1.10099C8.17039 1.05964 8.08591 1.03795 8.00004 1.03795C7.91417 1.03795 7.82969 1.05964 7.75444 1.10099C7.67918 1.14234 7.61558 1.20203 7.56954 1.27451Z"
                                            fill="#38453E"/>
                                    </svg>
                                </i>
                                <span>
                                    {translate('The search is based on the total amount of the check')}
                                </span>
                            </div>
                        </div>
                        <div className="hidden_date_after">
                            <span onClick={filterSumCheques}>
                                {translate('Refine search')}

                            </span>
                            <i>
                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_759_3547)">
                                        <path
                                            d="M3.18122 9.88235L6.24269 6.51474C6.50113 6.23045 6.50113 5.76955 6.24269 5.48527L3.18122 2.11765"
                                            stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_759_3547">
                                            <rect width="11" height="10" fill="white"
                                                  transform="translate(10 0.5) rotate(90)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </i>
                        </div>
                    </div>
                </div>

                <div className="filters">
                    <div className={"filter " + ((filter === 'on_balance')? 'active_filter': '')}
                        onClick={()=> setFilter('on_balance')}
                    >
                        <span>
                            {translate('Returned')}

                        </span>
                        <hr/>
                    </div>
                    <div className={"filter " + ((filter === 'pending')? 'active_filter': '')}
                        onClick={()=> setFilter('pending')}
                    >
                        <span>{translate('Pending')}</span>
                        <hr/>
                    </div>
                    <div className={"filter " + ((filter === 'deleted')? 'active_filter': '')}
                        onClick={()=> setFilter('deleted')}
                    >
                        <span>{translate('Canceled')}</span>
                        <hr/>
                    </div>
                </div>

                <ChequeByData filter={filter}/>

            </main>
            <Menu page={'home'}/>
        </>

    );
};

export default Home;