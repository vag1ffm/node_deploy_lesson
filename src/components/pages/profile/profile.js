import React, {useEffect, useState} from 'react';
import Menu from "../../help/menu";
import {useDispatch, useSelector} from "react-redux";
import {Logout} from "../../../store/reducers/authorization/axios";
import {Link, useNavigate} from "react-router-dom";
import LogOutButton from "./LogOutButton";
import Header from "../../help/header";
import translate from "../../../i18n/translate";

const Profile = () => {

    let {user, isLoading, error} = useSelector(state => state.userSlicer)


    let [style, setStyle] = useState({
        display: 'none'
    })

    let dispatch = useDispatch()
    let history = useNavigate()
    function logOut() {
        dispatch(Logout(history))
    }



    function showlogOut() {
        setStyle({
            display: 'flex'
        })
    }

    let userName = user.userName !== undefined? user.userName.split(' ')[0]: ''

    return (
        <>
            <Header page={'home'}/>

            <main className="profile">
                <h1 className={'' + (isLoading && 'loading')}>
                    {translate('Hi')} {'userName' && ` ${userName}`}
                    {/*{error && "Error"}*/}
                </h1>
                <Link to={'/profile_edit'}>
                    <div className="name_img">
                        <div className="left">
                            <div className="img" style={{backgroundImage: `url('${user.profile_photo}')`}}>

                            </div>
                            <div className="name_id">
                                <h3 className={'' + (isLoading && 'loading')}>
                                    {'userName' && userName}
                                    {error && "Error"}
                                    {/*<Loading user={user.userName} isLoading={isLoading} error={error}/>*/}
                                </h3>

                            </div>
                        </div>
                        <div className="right">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.35001"
                                    stroke="#041E1B" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </Link>

                <h3>{translate('Quick links')}</h3>
                <div className="item">
                    <div className="left">{translate("Customer support")}</div>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34999"
                            stroke="#38453E" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
                <div className="item">
                    <div className="left">{translate("Terms of sevice")}</div>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34999"
                            stroke="#38453E" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
                <h3>{translate("Settings")}</h3>
                <Link to={'/profile_edit'}>
                    <div className="item">
                        <div className="left">{translate("Account")}</div>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34999"
                                stroke="#38453E" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </Link>
                <div className="item"
                     onClick={showlogOut}
                >
                    <div className="left" style={{color:'#E5383B'}}>{translate("Log out")}</div>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34999"
                            stroke="#E5383B" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>


            </main>
            <Menu page={'profile'}/>
           <LogOutButton  style={style} setStyle={setStyle} logOut={logOut}/>
        </>
    );
};

export default Profile;