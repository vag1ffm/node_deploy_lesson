import React, {useEffect, useRef, useState} from 'react'

import {QrReader} from "@blackbox-vision/react-qr-reader";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {sendFiscalId} from "../../../store/reducers/cheques/axios";


const Scaner = () => {
    const [data, setData] = useState("NULL");
    console.log(data)

    let dispatch = useDispatch()
    let history = useNavigate()






    return (
        < >
            <QrReader
                onResult={(result) => {
                    if (result !== undefined && result !== null ) {
                        let data = {
                            'fiscal': result.text.slice(46,58)
                        }
                        dispatch(sendFiscalId(data, history, 'scan'))

                    }
                }}
                scanDelay={1000}
                style={{ height: '500px' }}
                constraints={{ facingMode: 'environment' }}

            />

        </>
    );
};


export default Scaner;
