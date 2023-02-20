import React from 'react'
import teststy from "../testmonials/testmonial.module.scss"
import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";
import onepic from "../../media/1.png"
import twopic from "../../media/2.png"
import threepic from "../../media/3.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
const Testmonial = () => {
    return (
        <>
            <div className={teststy.whole}>
                <div className={teststy.par}><img className={teststy.bordertop} src={bordertop} /></div>
                <h1>Testmonials</h1>
                <div className={teststy.par}><img className={teststy.borderbottom} src={borderbottom} /></div>
                <br />
                <div className={teststy.revi}>

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

                        <SwiperSlide className={teststy.revione}>
                            <img className={teststy.onepic} src={onepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revitwo}>
                            <img className={teststy.twopic} src={twopic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revithree}>
                            <img className={teststy.threepic} src={threepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>
                        <SwiperSlide className={teststy.revione}>
                            <img className={teststy.onepic} src={onepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revitwo}>
                            <img className={teststy.twopic} src={twopic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revithree}>
                            <img className={teststy.threepic} src={threepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>
                        <SwiperSlide className={teststy.revione}>
                            <img className={teststy.onepic} src={onepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revitwo}>
                            <img className={teststy.twopic} src={twopic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>

                        <SwiperSlide className={teststy.revithree}>
                            <img className={teststy.threepic} src={threepic} />
                            <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries.</p>
                        </SwiperSlide>
                   
                    </Swiper>


                </div>

            </div>
        </>
    )
}

export default Testmonial