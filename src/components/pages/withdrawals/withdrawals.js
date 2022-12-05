import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import WithdrawalHeader from "./withdrawalHeader";
import WithdrawalsCard from "./withdrawalsCard";
import WithdrawalsPhone from "./withdrawalsPhone";
import WithdrawalVariants from "./withdrawalVariants";
import {useDispatch, useSelector} from "react-redux";
import WaitPlease from "./wait-please";
import WaitSuccess from "./wait-success";
import WaitError from "./wait-error";
import {getMyBalance} from "../../../store/reducers/balance/axios";
import WithdrawalsCardVariants from "./withdrawalsCardVariants";

const Withdrawals = () => {
    let {success, isLoading, error} = useSelector(state => state.withdrawalSlicer)
    // console.log(isLoading)

    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getMyBalance())
    }, [])

    let {balance} = useSelector(state => state.balanceSlice)
    
    return (
        <>
            <WithdrawalHeader />
            <Routes>
                <Route path={'/'} element={<WithdrawalVariants/>}/>
                <Route path={'/card'} element={<WithdrawalsCard/>}/>
                <Route path={'/phone'} element={<WithdrawalsPhone/>}/>
                <Route path={'/userCards'} element={<WithdrawalsCardVariants/>}/>
            </Routes>
            <WaitPlease isLoading={isLoading}/>
            <WaitSuccess success={success} />
            <WaitError error={error}/>
        </>
);
};

export default Withdrawals;