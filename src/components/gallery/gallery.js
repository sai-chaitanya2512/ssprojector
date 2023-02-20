import React from 'react'
import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";
import galsty from "../gallery/gallery.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Gallery = () => {
    return (
        <div className={galsty.whole}>

            <div className={galsty.par}><img className={galsty.bordertop} src={bordertop} /></div>
            <h1> Gallery</h1>
            <div className={galsty.par}><img className={galsty.borderbottom} src={borderbottom} /></div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className={galsty.innerimg} src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>


        </div>
    )
}

export default Gallery