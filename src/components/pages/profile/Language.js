import React, {useState} from 'react';
import translate from "../../../i18n/translate";
import {useDispatch, useSelector} from "react-redux";
import {languageSlice} from "../../../store/reducers/Language/languageSlice";

const Language = () => {

    let [display, setDisplay] = useState('none')
    let [lang, setLang] = useState('English')

    function showGender() {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    function hideGender(lang) {
        setLang(lang)
        setDisplay('none')
    }
    let dispatch = useDispatch()
    let {language} = useSelector(state => state.languageSlice)
    console.log(language)

    let lang_list = ['English', 'Azerbaijani','Russian']
    lang_list = lang_list.filter(item => item !== language);
    lang_list.unshift(language)

    function changeLang(lang) {
        dispatch(languageSlice.actions.changeLanguage(lang))
    }


    return (
        <div className="gender">
            <span>{translate('Application language')}</span>
            <select className={'item item-select'}
                onChange={(e)=> changeLang(e.target.value)}
            >
                <option value="english"> {translate('English')} </option>
                <option value="azerbaijani"> {translate('Azerbaijani')} </option>
                <option value="russian"> {translate("Russian")} </option>
            </select>
        </div>
    );
};

export default Language;