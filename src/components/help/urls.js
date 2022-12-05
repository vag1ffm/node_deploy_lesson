import React from 'react';
import {Route, Routes} from "react-router-dom";
import Start from "../pages/start/start";
import Start2 from "../pages/start/start2";
import Start3 from "../pages/start/start3";
import LogIn from "../pages/login/log-in";
import Register from "../pages/login/register";
import Language from "../pages/start/language";
import Reset1 from "../pages/reset password/reset1";
import MainPage from "../main-page";
import Notification from "../pages/other/notification";
import ProfileEdit from "../pages/profile/profile-edit";
import PasswordChange from "../pages/profile/password-change";
import Balance from "../pages/balance/balance";
import Withdrawals from "../pages/withdrawals/withdrawals";
import ActivateEmailPage from "../pages/login/activateEmailPage";
import Scanner from "../pages/scaner/scanner";
import Reset2 from "../pages/reset password/reset2";
import Reset3 from "../pages/reset password/reset3";
import Reset4 from "../pages/reset password/reset4";
import ManualEntry from "../pages/scaner/manual-entry";
import SuccessCode from "../pages/scaner/success-code";
import SuccessScan from "../pages/scaner/success-scan";
import OperationInform from "../pages/other/operation-inform";
import Maps from '../pages/GoogleMap/map';
import Verification1 from "../pages/login/verification1";
import Verification2 from "../pages/login/verification2";
import LoadingScan from "./LoadingScan";


const Urls = () => {
    return (
        <Routes>
            <Route path="/start" element={<Start/>}/>
            <Route path="/start2" element={<Start2/>}/>
            <Route path="/start3/*" element={<Start3/>}/>
            <Route path="/start3/language" element={<Language/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/resetPass" element={<Reset1/>}/>
            <Route path="/resetPass2" element={<Reset2/>}/>
            <Route path="/reset/password/:uid/:token" element={<Reset3/>}/>
            <Route path="/resetPass4" element={<Reset4/>}/>
            <Route path="/verification1" element={<Verification1/>}/>
            <Route path="/verification2" element={<Verification2/>}/>
            <Route path="/*" element={<MainPage/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/profile_edit" element={<ProfileEdit/>}/>
            <Route path="/password_change" element={<PasswordChange/>}/>
            <Route path="/balance" element={<Balance/>}/>
            <Route path="/withdrawals/*" element={<Withdrawals/>}/>
            <Route path="/activate/email/:Uid/:token/" element={<ActivateEmailPage/>}/>
            <Route path="/scanner" element={<Scanner/>}/>
            <Route path="/manualentry" element={<ManualEntry/>}/>
            <Route path="/successCode" element={<SuccessCode/>}/>
            <Route path="/successScan" element={<SuccessScan/>}/>
            <Route path="/operationInformation/:fiscal" element={<OperationInform/>}/>
            <Route path="/map/*" element={<Maps/>}/>
            <Route path="/loading" element={<LoadingScan/>}/>
        </Routes>
    );
};

export default Urls;