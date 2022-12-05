import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

const Cards = ({cards}) => {
    console.log(cards)


    function isActiveSlide(isActive) {
        console.log(isActive)
        return isActive
    }


    return (

        <div className={'cards-cards'}>
            <h2 className="cards">Cards</h2>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    cards.map((card, index) =>
                        <SwiperSlide key={index}>

                            <div className={'card_card'}>
                                {({ isActive }) => (
                                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                                )}
                                <div className="card_model">
                                    <svg width="58" height="37" viewBox="0 0 58 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_915_9768)">
                                            <path d="M25.1003 26.5802H20.6628L23.4362 9.41224H27.8742L25.1003 26.5802ZM16.9297 9.41224L12.6992 21.2205L12.1986 18.6777L12.1991 18.6786L10.7059 10.958C10.7059 10.958 10.5254 9.41224 8.60094 9.41224H1.60709L1.52502 9.70293C1.52502 9.70293 3.66376 10.1511 6.16677 11.6652L10.0221 26.5806H14.6456L21.7055 9.41224H16.9297ZM51.8329 26.5802H55.9075L52.3549 9.41178H48.7878C47.1405 9.41178 46.7393 10.6912 46.7393 10.6912L40.1212 26.5802H44.747L45.672 24.0301H51.3132L51.8329 26.5802ZM46.95 20.5073L49.2816 14.0826L50.5933 20.5073H46.95ZM40.4681 13.5407L41.1014 9.85402C41.1014 9.85402 39.1473 9.10547 37.1102 9.10547C34.9081 9.10547 29.6787 10.0749 29.6787 14.7889C29.6787 19.2242 35.8163 19.2793 35.8163 21.609C35.8163 23.9387 30.3111 23.5212 28.4942 22.0521L27.8345 25.9069C27.8345 25.9069 29.8159 26.8764 32.8433 26.8764C35.8715 26.8764 40.4398 25.2971 40.4398 20.9987C40.4398 16.5349 34.2471 16.1193 34.2471 14.1786C34.2475 12.2374 38.5692 12.4868 40.4681 13.5407Z" fill="#2566AF"/>
                                            <path d="M12.1991 18.678L10.7059 10.9574C10.7059 10.9574 10.5254 9.41162 8.60094 9.41162H1.60709L1.52502 9.70231C1.52502 9.70231 4.88654 10.404 8.11082 13.0331C11.1938 15.546 12.1991 18.678 12.1991 18.678Z" fill="#E6A540"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_915_9768">
                                                <rect width="58" height="37" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bottom">
                                    <div className="card_number">
                                        {card.cc_number}
                                    </div>
                                    <div className="card_owner_name">
                                        {card.cc_name}
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                }

                {/*<SwiperSlide>*/}
                {/*    {({ isActive }) => (*/}
                {/*        <div>Current slide is {isActive ? 'active' : 'not active'}</div>*/}
                {/*    )}*/}
                {/*</SwiperSlide>*/}



            </Swiper>
        </div>
    );
};

export default Cards;