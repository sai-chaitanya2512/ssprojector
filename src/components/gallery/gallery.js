import React from 'react'
import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";
import galsty from "../gallery/gallery.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";


const Gallery = () => {
    return (
        <div className={galsty.whole} id="portfolio">

            <div className={galsty.par}><img className={galsty.bordertop} src={bordertop} /></div>
            <h1> Gallery</h1>
            <div className={galsty.par}><img className={galsty.borderbottom} src={borderbottom} /></div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/1ijdoe" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/ubrgbc" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/cypxts" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/lipovd" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/ze0brf" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/drcluk" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/y6gank" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/fmisrd" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://rb.gy/6q53oj" />
                </SwiperSlide>
            </Swiper>


        </div>
    )
}

export default Gallery