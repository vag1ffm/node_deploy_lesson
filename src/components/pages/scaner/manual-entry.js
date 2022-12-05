import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {sendFiscalId} from "../../../store/reducers/cheques/axios";
import translate from "../../../i18n/translate";

const ManualEntry = () => {


    let [fiscal, setFiscal] = useState('')
    let dispatch = useDispatch()
    let history = useNavigate()
    function sendFiscal() {
        let data = {
            'fiscal': fiscal
        }
        dispatch(sendFiscalId(data, history, 'code'))
    }

    return (
       <>
           <header>
               <div className="back">
                   <Link to={'/'}>
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                               d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                               stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                   </Link>
              </div>
               <h2>{translate('Manual entry')}</h2>
           </header>
           <main className="manual_entry">
                <span>
                    {translate('Please enter the 12-digit number shown at the bottom of the receipt')}
                </span>
               <div className="inputs">
                   <div className="input">
                       <input type="text" placeholder="Code"
                              onChange={(e)=> setFiscal(e.target.value)}
                              value={fiscal}
                       />
                   </div>
               </div>
               <div className="button button10"
                onClick={sendFiscal}
               >
                   {translate('Send')}

               </div>
           </main>
       </>
    );
};

export default ManualEntry;