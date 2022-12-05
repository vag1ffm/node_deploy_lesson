import React, {useState} from 'react';
import translate from "../../../i18n/translate";
import {logDOM} from "@testing-library/react";

const Gender = ({gender, setGender,}) => {

    let [display, setDisplay] = useState('none')

    function showGender() {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    function hideGender(gender) {
        setGender(gender)
        setDisplay('none')
    }

    console.log(gender)

    let gender_list = ['Male', 'Female', 'Other']
    gender_list = gender_list.filter(item => item !== gender);
    gender_list.unshift(gender)



    return (
        <div className="gender">
            <span>{translate("Gender")}</span>
            <select className={'item item-select gender-select'}>
                {gender_list.map(gender=> {
                    return <option value={gender}>{gender}</option>
                })}
            </select>

        </div>
    );
};

export default Gender;