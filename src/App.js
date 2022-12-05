import React from "react";
import Urls from "./components/help/urls";
import isAutorizated from "./components/help/IsAutorizated";
import {I18nPropvider, LOCALES} from "./i18n";
import {useSelector} from "react-redux";


function App() {
    isAutorizated()

    let {language} = useSelector(state => state.languageSlice)
    let appLang
    if (language === 'azerbaijani') {
        appLang = LOCALES.AZERBAIJANIAN
    } else if (language === 'russian') {
        appLang = LOCALES.RUSSIAN
    } else if (language === 'english'){
        appLang = LOCALES.ENGLISH
    }


    return (
        <I18nPropvider locale={appLang}>
            <>
                <Urls/>
            </>
        </I18nPropvider>

    );
}

export default App;
