import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Withdrawal_Card} from "../../../store/reducers/withdrawals/axios";
import translate from "../../../i18n/translate";
import Cards from "./cards";

const WithdrawalsCardVariants = () => {

    let [amount, setAmount] = useState()

    let dispatch = useDispatch()

    function withdrawal() {
        let cc_number = document.querySelector('.swiper-slide-active .bottom .card_number').innerText
        let data = {
            'cc_number' : cc_number,
            'withdrawal_amount': amount,
        }
        dispatch(Withdrawal_Card(data))
    }

    let {cards} = useSelector(state => state.balanceSlice)

    console.log(cards)

    return (
        <>
            <main className="withdrawal_to_card">

                <Cards cards={cards}/>

                {/*<Cards />*/}
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

                </div>

                <div className="button button10" onClick={withdrawal}>
                    {translate("Withdrawal")}
                </div>
            </main>
        </>


    );
};

export default WithdrawalsCardVariants;