import React, {useEffect} from 'react';
import Header from "./help/header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import Bonuses from "./pages/bonuses";
import Profile from "./pages/profile/profile";
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../store/reducers/user/axios";
import IsAuthorized from "./help/IsAutorizated";
import {getMyBalance} from "../store/reducers/balance/axios";

const MainPage = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getMyInfo())
        dispatch(getMyBalance())

    }, [])


    let {balance} = useSelector(state => state.balanceSlice)
    IsAuthorized()

    return (
        <>
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search/*" element={<Search/>}/>
                <Route path="/bonuses" element={<Bonuses/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </>
    );
};

export default MainPage;