import React, {useState} from 'react';
import translate from "../../../i18n/translate";

const Verification2 = () => {
    let [code, setCode] = useState('')


    return (
        <main>
            <div className="back">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                        stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="img verify_img2">
                <img src="../static/frontend/img/6.png" alt=""/>
            </div>
            <div className="verification code_to_phone">
                <h2>{translate("Verification")}</h2>
                <p>{translate("Enter the OTP sent to +994 (70) 321 17 25")}</p>

                <label className="input">
                    <input type="text" maxLength={'4'}
                        value={code}
                        onChange={(e)=> setCode(e.target.value)}
                    />
                        <div  className="inputs_cover">
                            <div className="number"
                                style={{background:( code[0])? '#00CA61': '', color: code[0]? '#fff': '#000' }}
                            >{code[0]}</div>
                            <div className="number"
                                 style={{background:( code[1])? '#00CA61': '', color: code[1]? '#fff': '#000' }}
                            >{code[1]}</div>
                            <div className="number"
                                 style={{background:( code[2])? '#00CA61': '', color: code[2]? '#fff': '#000' }}
                            >{code[2]}</div>
                            <div className="number"
                                 style={{background:( code[3])? '#00CA61': '', color: code[3]? '#fff': '#000' }}
                            >{code[3]}</div>
                        </div>
                </label>
                <div className="dont_receive">
                    {translate("Dont receive the code?")}
                </div>
                <div className="resend">
                    {translate("Resend new code")}
                </div>

                <div className="button button7 active7">
                    {translate("Verify & proceed")}
                </div>
            </div>


        </main>
    );
};

export default Verification2;