import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Withdrawal_Card} from "../../../store/reducers/withdrawals/axios";
import translate from "../../../i18n/translate";
import Cards from "./cards";

const WithdrawalsCard = () => {

    let [card, setCard] = useState('mastercard')
    let [amount, setAmount] = useState()
    // let [name, setName] = useState()
    let [number, setNumber] = useState()

    let dispatch = useDispatch()

    function withdrawal() {
        let data = {
            'cc_number' : number,
            'withdrawal_amount': amount,
        }
        dispatch(Withdrawal_Card(data))
    }



    return (
        <>
            <main className="withdrawal_to_card">
                {/*<Cards/>*/}
                <h3>Withdraw to Card</h3>
                <div className="cards">
                    <div className="card"
                         style={{border: (card==='mastercard'?'2px solid #00CA61': '')}}
                         onClick={()=> {setCard('mastercard')}}
                    >
                        <div className="img">
                            <svg width="30" height="19" viewBox="0 0 30 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5845 2.88818H11.3994V16.112H18.5845V2.88818Z"
                                      fill="#FF5A00"
                                />
                                <path
                                    d="M11.8777 9.50004C11.8777 6.81337 13.1107 4.42884 15.0026 2.88815C13.6103 1.76666 11.8538 1.08887 9.93798 1.08887C5.39945 1.08887 1.72717 4.85076 1.72717 9.50004C1.72717 14.1493 5.39945 17.9112 9.93798 17.9112C11.8538 17.9112 13.6103 17.2334 15.0026 16.1119C13.108 14.593 11.8777 12.1867 11.8777 9.50004Z"
                                    fill="#EB001B"
                                />
                                <path
                                    d="M28.278 9.50004C28.278 14.1493 24.6058 17.9112 20.0672 17.9112C18.1514 17.9112 16.3949 17.2334 15.0026 16.1119C16.9184 14.5685 18.1275 12.1867 18.1275 9.50004C18.1275 6.81337 16.8945 4.42884 15.0026 2.88815C16.3923 1.76666 18.1487 1.08887 20.0646 1.08887C24.6058 1.08887 28.278 4.87526 28.278 9.50004Z"
                                    fill="#F79E1B"
                                />
                            </svg>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{display: (card==='mastercard'?'block': 'none')}}
                            >
                                <path d="M3.5 7.55244L5.63888 9.52561C5.74628 9.62467 5.92038 9.62467 6.02778 9.52561L10.5 5.3999" stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                        <span>
                            Mastercard
                        </span>
                    </div>
                    <div className="card"
                         style={{border: (card==='visa'?'2px solid #00CA61': '')}}
                         onClick={()=> {setCard('visa')}}
                    >
                        <div className="img">
                            <svg width="30" height="19" viewBox="0 0 30 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_782_2650)">
                                    <path
                                        d="M12.9829 13.6493H10.6877L12.1222 4.83331H14.4177L12.9829 13.6493ZM8.75677 4.83331L6.56858 10.897L6.30965 9.59125L6.30988 9.59172L5.53757 5.62709C5.53757 5.62709 5.44418 4.83331 4.44878 4.83331H0.831266L0.788818 4.98259C0.788818 4.98259 1.89506 5.21275 3.18972 5.99025L5.18383 13.6495H7.57531L11.227 4.83331H8.75677ZM26.8101 13.6493H28.9177L27.0801 4.83307H25.2351C24.3831 4.83307 24.1755 5.49007 24.1755 5.49007L20.7523 13.6493H23.145L23.6235 12.3398H26.5413L26.8101 13.6493ZM24.2845 10.5308L25.4905 7.23162L26.1689 10.5308H24.2845ZM20.9318 6.95335L21.2594 5.06017C21.2594 5.06017 20.2486 4.67578 19.195 4.67578C18.0559 4.67578 15.3511 5.1736 15.3511 7.59431C15.3511 9.87188 18.5257 9.90018 18.5257 11.0965C18.5257 12.2928 15.6782 12.0785 14.7384 11.3241L14.3972 13.3036C14.3972 13.3036 15.422 13.8014 16.9879 13.8014C18.5542 13.8014 20.9172 12.9904 20.9172 10.7831C20.9172 8.49091 17.714 8.27749 17.714 7.28091C17.7142 6.28409 19.9496 6.41214 20.9318 6.95335Z"
                                        fill="#2566AF"/>
                                    <path
                                        d="M6.30988 9.59142L5.53757 5.62678C5.53757 5.62678 5.44418 4.83301 4.44878 4.83301H0.831266L0.788818 4.98228C0.788818 4.98228 2.52753 5.34262 4.19527 6.6927C5.7899 7.98312 6.30988 9.59142 6.30988 9.59142Z"
                                        fill="#E6A540"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_782_2650">
                                        <rect width="30" height="19" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 style={{display: (card==='visa'?'block': 'none')}}
                            >
                                <path d="M3.5 7.55244L5.63888 9.52561C5.74628 9.62467 5.92038 9.62467 6.02778 9.52561L10.5 5.3999" stroke="#00CA61" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span>
                            Visa
                        </span>
                    </div>
                </div>
                <h2>{translate("Amount")}</h2>
                <div className="inputs">
                    <div className="input">
                        <input type="number" placeholder={'0'}
                               value={amount}
                               onChange={(e)=> setAmount(e.target.value) }
                        />
                            <i className="manat-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="50" height="50" rx="20" fill="#B5DFC8"/>
                                    <path
                                        d="M19.6152 32.707H22.0664V26.3008C22.0664 24.5137 22.9453 23.2637 24.5664 22.9805V32.707H25.9922V22.9707C27.623 23.2344 28.5508 24.4453 28.5508 26.3008V32.707H31.002V26.1641C31.002 23.0781 29.0781 21.0371 25.9922 20.7832V18.8105H24.5664V20.7832C21.4609 21.0762 19.6152 23.166 19.6152 26.1641V32.707Z"
                                        fill="#041E1B"/>
                                </svg>
                            </i>
                    </div>
                    <div className="input">
                        <h3>{translate("Card holder name")}</h3>
                        <input type="text" placeholder={'Name'}
                            // value={name}
                            //    onChange={(e)=> setName(e.target.value) }
                        />
                    </div>
                    <div className="input">
                        <h3>{translate("Card number")}</h3>
                        <input type="number" placeholder={'Card'}
                            value={number}
                               onChange={(e)=> setNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className="button button10" onClick={withdrawal}>
                    {translate("Withdrawal")}
                </div>
            </main>
        </>


    );
};

export default WithdrawalsCard;