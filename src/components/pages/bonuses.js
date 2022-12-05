import React from 'react';
import Menu from "../help/menu";
import Header from "../help/header";
import translate from "../../i18n/translate";

const Bonuses = () => {
    return (
        <>
            <Header page={'bonuses'}/>

            <main className="bonuses">

                <img src="../static/frontend/img/9.png" alt=""/>
                    <h2>{translate("Coming soon...")}</h2>
            </main>
            <Menu page={'bonuses'}/>
        </>
    );
};

export default Bonuses;