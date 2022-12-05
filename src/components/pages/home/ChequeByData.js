import React, {useEffect} from 'react';
import Cheque from "./cheque";
import {useDispatch, useSelector} from "react-redux";
import {getCheques} from "../../../store/reducers/cheques/axios";
import {dataConvert} from "../../help/Date";
import ChequeLoading from "./chequeLoading";
import {Link} from "react-router-dom";

const ChequeByData = ({filter}) => {
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getCheques(filter))
    }, [filter])


    let {cheques, isLoading, error} = useSelector(state => state.chequeSlicer)






    let MainDate

    return (
        <div className="data_trans">
            {isLoading && <ChequeLoading/>}

            {cheques && cheques.map((cheque, index) => {

                let date = cheque.time_added

                if (date!==MainDate) {
                    MainDate = date
                    return   <>
                        <span>{dataConvert(date)}</span>
                        <Link to={`/operationInformation/${cheque.fiscal}`} >
                            <Cheque

                                filter={filter}
                                store={cheque.store}
                                cashback_value={cheque.cashback_value}
                                check_sum={cheque.check_sum}
                            />
                        </Link>
                    </>

                } else {
                    return  <Link to={`/operationInformation/${cheque.fiscal}`} key={cheque.fiscal}>
                        <Cheque

                            filter={filter}
                            store={cheque.store}
                            cashback_value={cheque.cashback_value}
                            check_sum={cheque.check_sum}
                        />
                    </Link>
                }
            })}


        </div>
    );
};

export default ChequeByData;