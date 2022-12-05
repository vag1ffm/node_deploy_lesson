import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AddPhoto, changeMyInfo, getMyInfo} from "../../../store/reducers/user/axios";
import Gender from "./gender";
import Language from "./Language";
import translate from "../../../i18n/translate";

const ProfileEdit = () => {

    useEffect(()=> {
        dispatch(getMyInfo())
    }, [])

    let [img, setImg] = useState()

    let {user} = useSelector(state => state.userSlicer)
    let history = useNavigate()


    let dispatch = useDispatch()
    function safeUserInfo() {
        let full_name = `${document.querySelector('.name_input').value} ${document.querySelector('.surname_input').value}`

        let data = {
            "username" : full_name,
            "phone_number" : document.querySelector('.phone_input').value,
            "address" : document.querySelector('.address_input').value,
            "email" : document.querySelector('.email_input').value,
            'gender': document.querySelector('.gender-select').value,
            'birth_day': document.querySelector('.date_input').value,
        }
        dispatch(changeMyInfo(data, history))
    }


    console.log(user)

    let fullName = user.userName !== undefined? user.userName.split(' ') : []

    function addPhoto(img) {
        console.log(img)
        dispatch(AddPhoto(img, user.id))
    }


    function deletePhoto() {

    }


    return (
        <>
            <header className="profile_edit">
                <div className="left">
                    <Link to={'/profile'}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8127 12.0588L15.4652 19.4064C14.8449 20.0266 14.8449 21.0322 15.4652 21.6525L22.8127 29"
                                stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    <h2>{translate('Account')}</h2>
                </div>
                <div className="right">
                    <Link to={'/profile'}>
                        <svg onClick={safeUserInfo} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20.1501L16.1111 25.7877C16.4179 26.0708 16.9154 26.0708 17.2222 25.7877L30 14"
                                  stroke="#041E1B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </header>
            <main className="profile_edit">
                <div className="header_edit">
                    <div className="imgs_icons">
                        <div className="img" style={{backgroundImage: `url('${user.profile_photo}')`}}>
                            {/*<img src={user.profile_photo} alt=""/>*/}
                        </div>
                        <div className="icons">
                            <label className={'for_file'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.3" cx="20" cy="20" r="20" fill="#041E1B"/>
                                    <path
                                        d="M26.5051 24.5H13.2907L17.2427 18.9816L21.0484 22.3557C21.3227 22.5989 21.7392 22.5868 21.9988 22.3278L22.9872 21.342L26.5051 24.5Z"
                                        stroke="white"/>
                                    <path
                                        d="M11.3335 24.6667V14.5C11.3335 13.6716 12.0051 13 12.8335 13H27.1668C27.9953 13 28.6668 13.6716 28.6668 14.5V24.6667C28.6668 25.4951 27.9953 26.1667 27.1668 26.1667H12.8335C12.0051 26.1667 11.3335 25.4951 11.3335 24.6667Z"
                                        stroke="white"/>
                                </svg>
                                <input type="file" hidden
                                       onChange={(e)=> {
                                        addPhoto(e.target.files[0])
                                    }}
                                />
                            </label>

                            <label className={'for_file'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.3" cx="20" cy="20" r="20" fill="#041E1B"/>
                                    <path
                                        d="M29.1668 25.8333C29.1668 26.2754 28.9912 26.6993 28.6787 27.0118C28.3661 27.3244 27.9422 27.5 27.5002 27.5H12.5002C12.0581 27.5 11.6342 27.3244 11.3217 27.0118C11.0091 26.6993 10.8335 26.2754 10.8335 25.8333V16.6667C10.8335 16.2246 11.0091 15.8007 11.3217 15.4882C11.6342 15.1756 12.0581 15 12.5002 15H15.8335L17.5002 12.5H22.5002L24.1668 15H27.5002C27.9422 15 28.3661 15.1756 28.6787 15.4882C28.9912 15.8007 29.1668 16.2246 29.1668 16.6667V25.8333Z"
                                        stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M19.9998 24.1667C21.8408 24.1667 23.3332 22.6743 23.3332 20.8333C23.3332 18.9924 21.8408 17.5 19.9998 17.5C18.1589 17.5 16.6665 18.9924 16.6665 20.8333C16.6665 22.6743 18.1589 24.1667 19.9998 24.1667Z"
                                        stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input type="file" hidden onChange={
                                    (e)=> {
                                        addPhoto(e.target.files[0])
                                    }
                                }/>
                            </label>

                                <svg
                                    onClick={deletePhoto}
                                    width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.3" cx="20" cy="20" r="20" fill="#041E1B"/>
                                    <path
                                        d="M13.333 15H26.6663L25.3497 26.85C25.3045 27.2578 25.1106 27.6346 24.8049 27.9083C24.4992 28.182 24.1033 28.3334 23.693 28.3333H16.3063C15.896 28.3334 15.5001 28.182 15.1945 27.9083C14.8888 27.6346 14.6948 27.2578 14.6497 26.85L13.333 15Z"
                                        stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M16.1208 12.6225C16.2556 12.3366 16.4689 12.095 16.7358 11.9257C17.0028 11.7565 17.3123 11.6667 17.6283 11.6667H22.3717C22.6879 11.6665 22.9976 11.7563 23.2646 11.9255C23.5317 12.0948 23.7451 12.3365 23.88 12.6225L25 15H15L16.1208 12.6225Z"
                                        stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.6665 15H28.3332" stroke="white" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M18.333 19.1667V23.3333" stroke="white" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M21.6665 19.1667V23.3333" stroke="white" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                        </div>
                    </div>
                </div>
                <div className="profile_main">
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Name" className={'name_input'}


                               defaultValue={fullName[0]}
                            />
                            <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 18H5C4.44772 18 4 17.5523 4 17V16.666C4 15.2128 4.90152 13.9121 6.26225 13.4022C8.67222 12.4989 11.3278 12.4989 13.7378 13.4022C15.0985 13.9121 16 15.2128 16 16.666V17C16 17.5523 15.5523 18 15 18Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M8.47525 10.2168C9.43225 10.7084 10.5676 10.7084 11.5245 10.2168C12.4152 9.75932 13.0533 8.92604 13.2628 7.94694L13.3187 7.68562C13.533 6.68437 13.3041 5.63939 12.691 4.81932L12.6012 4.69924C11.988 3.87907 11.024 3.39612 9.9999 3.39612C8.97585 3.39612 8.01175 3.87907 7.39858 4.69924L7.3088 4.81932C6.69568 5.63939 6.46685 6.68437 6.68108 7.68562L6.737 7.94694C6.9465 8.92604 7.58463 9.75932 8.47525 10.2168Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                        </i>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Surname" className={'surname_input'}


                                   defaultValue={fullName[1]}
                            />
                            <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 18.0001H5C4.44772 18.0001 4 17.5524 4 17.0001V16.666C4 15.2128 4.90152 13.9122 6.26225 13.4022C8.67222 12.4989 11.3278 12.4989 13.7378 13.4022C15.0985 13.9122 16 15.2128 16 16.666V17.0001C16 17.5524 15.5523 18.0001 15 18.0001Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M8.47525 10.2168C9.43225 10.7084 10.5676 10.7084 11.5245 10.2168C12.4152 9.75933 13.0533 8.92605 13.2628 7.94695L13.3187 7.68563C13.533 6.68438 13.3041 5.6394 12.691 4.81933L12.6012 4.69925C11.988 3.87908 11.024 3.39613 9.9999 3.39613C8.97585 3.39613 8.01175 3.87908 7.39858 4.69925L7.3088 4.81933C6.69568 5.6394 6.46685 6.68438 6.68108 7.68563L6.737 7.94695C6.9465 8.92605 7.58463 9.75933 8.47525 10.2168Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                            </i>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Address" className={'address_input'}


                                   defaultValue={user.address}
                            />
                            <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 11.3333C11.3807 11.3333 12.5 10.214 12.5 8.83333C12.5 7.45262 11.3807 6.33333 10 6.33333C8.61929 6.33333 7.5 7.45262 7.5 8.83333C7.5 10.214 8.61929 11.3333 10 11.3333Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M10.0002 2.16667C8.23205 2.16667 6.53636 2.86905 5.28612 4.11929C4.03588 5.36953 3.3335 7.06522 3.3335 8.83333C3.3335 10.41 3.6685 11.4417 4.5835 12.5833L10.0002 18.8333L15.4168 12.5833C16.3318 11.4417 16.6668 10.41 16.6668 8.83333C16.6668 7.06522 15.9645 5.36953 14.7142 4.11929C13.464 2.86905 11.7683 2.16667 10.0002 2.16667V2.16667Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="+994 704090978" className={'phone_input'}


                                   defaultValue={user.number}
                            />
                                <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.9996 13.9817V16.0893C17.0004 16.2849 16.9602 16.4786 16.8817 16.6578C16.8031 16.8371 16.6879 16.998 16.5435 17.1303C16.399 17.2626 16.2285 17.3633 16.0428 17.4259C15.8571 17.4886 15.6603 17.5119 15.465 17.4943C13.299 17.2594 11.2183 16.5207 9.39023 15.3376C7.68945 14.2589 6.24748 12.8198 5.16674 11.1224C3.9771 9.28969 3.23677 7.20306 3.00571 5.03156C2.98812 4.83729 3.01126 4.6415 3.07364 4.45664C3.13603 4.27178 3.2363 4.10191 3.36807 3.95785C3.49984 3.81378 3.66022 3.69868 3.839 3.61986C4.01779 3.54105 4.21106 3.50025 4.40651 3.50007H6.51826C6.85987 3.49671 7.19105 3.61744 7.45007 3.83976C7.70909 4.06208 7.87828 4.37081 7.92609 4.70841C8.01522 5.38287 8.18052 6.04511 8.41883 6.68249C8.51354 6.93394 8.53403 7.20721 8.47789 7.46993C8.42175 7.73265 8.29132 7.9738 8.10207 8.16481L7.20809 9.05701C8.21016 10.8158 9.6693 12.2721 11.4316 13.2721L12.3256 12.3799C12.517 12.1911 12.7586 12.0609 13.0218 12.0049C13.2851 11.9488 13.5589 11.9693 13.8108 12.0638C14.4495 12.3016 15.113 12.4666 15.7888 12.5556C16.1308 12.6037 16.4431 12.7756 16.6663 13.0386C16.8895 13.3015 17.0081 13.6372 16.9996 13.9817Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                        </div>
                        <div className="input">
                            <input type="email" placeholder="gmail.10@gmail.com" className={'email_input'}


                                   defaultValue={user.email}
                            />
                                <i>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7V14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14V7Z"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M16.9997 6.99843L11.3013 11.8828C10.5523 12.5248 9.44708 12.5248 8.6981 11.8828L3 6.9987"
                                            stroke="#759383" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                        </div>
                    </div>
                </div>
                <div className="gender_date">
                    <div>
                        <Gender

                            gender={user.gender}
                            // setGender={'df '}
                        />

                        <div className="gender">
                            <span>{translate('Date of Birth')}</span>
                            <div className="item">
                                <label>
                                    <input type="date"  className={'date_input'}
                                           defaultValue={user.dataOfBirth}
                                    />
                                    <i>
                                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_806_2191)">
                                                <path
                                                    d="M1.47047 3.68128L4.53194 6.74275C4.79039 7.00119 5.20938 7.00119 5.46783 6.74275L8.5293 3.68128"
                                                    stroke="#38453E" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_806_2191">
                                                    <rect width="10" height="10" fill="white"
                                                          transform="translate(10 10.5) rotate(-180)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </i>
                                </label>

                            </div>
                        </div>
                    </div>
                   <Language

                   />

                </div>
                <div className="password_change profile">
                        <h3>{translate("Password")}</h3>
                        <Link to={'/password_change'}>
                            <div className="item">
                                <div className="left">{translate("Password changes")}</div>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.6092 23.75L20.8546 17.5046C21.3818 16.9774 21.3818 16.1226 20.8546 15.5954L14.6092 9.34999"
                                        stroke="#38453E" strokeWidth="1.21429" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
            </main>
        </>
    );
};

export default ProfileEdit;