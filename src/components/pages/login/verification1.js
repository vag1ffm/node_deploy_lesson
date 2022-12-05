import React from 'react';
import translate from "../../../i18n/translate";

const Verification1 = () => {
    return (
        <main>
            <div className="back">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                        stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="img verify_img">
                <img src="../static/frontend/img/5.png" alt=""/>
            </div>
            <div className="verification">
                <h2>{translate("Verification")}</h2>
                <p>{translate("We will sent you an One Time Password on this mobile number")}</p>
                <h4>{translate("Enter Mobile Number")}</h4>
                <div className="inputs">
                    <div className="input">
                        <i>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.9996 13.9817V16.0893C17.0004 16.2849 16.9602 16.4786 16.8817 16.6578C16.8031 16.8371 16.6879 16.998 16.5435 17.1303C16.399 17.2626 16.2285 17.3633 16.0428 17.4259C15.8571 17.4886 15.6603 17.5119 15.465 17.4943C13.299 17.2594 11.2183 16.5207 9.39023 15.3376C7.68945 14.2589 6.24748 12.8198 5.16674 11.1224C3.9771 9.28969 3.23677 7.20306 3.00571 5.03156C2.98812 4.83729 3.01126 4.6415 3.07364 4.45664C3.13603 4.27178 3.2363 4.10191 3.36807 3.95785C3.49984 3.81378 3.66022 3.69868 3.839 3.61986C4.01779 3.54105 4.21106 3.50025 4.40651 3.50007H6.51826C6.85987 3.49671 7.19105 3.61744 7.45007 3.83976C7.70909 4.06208 7.87828 4.37081 7.92609 4.70841C8.01522 5.38287 8.18052 6.04511 8.41883 6.68249C8.51354 6.93394 8.53403 7.20721 8.47789 7.46993C8.42175 7.73265 8.29132 7.9738 8.10207 8.16481L7.20809 9.05701C8.21016 10.8158 9.6693 12.2721 11.4316 13.2721L12.3256 12.3799C12.517 12.1911 12.7586 12.0609 13.0218 12.0049C13.2851 11.9488 13.5589 11.9693 13.8108 12.0638C14.4495 12.3016 15.113 12.4666 15.7888 12.5556C16.1308 12.6037 16.4431 12.7756 16.6663 13.0386C16.8895 13.3015 17.0081 13.6372 16.9996 13.9817Z"
                                    stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                        <input type="text" placeholder="Number"/>
                    </div>
                </div>
                <div className="button button5">
                    {translate("Log in")}
                </div>
            </div>


        </main>
    );
};

export default Verification1;