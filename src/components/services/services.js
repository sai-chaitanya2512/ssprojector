import React from 'react'
import sersty from "../services/services.module.scss";

import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";
import oneinner from "../../media/wed.jpg"
import twoinner from "../../media/birthday.png"
import threeinner from "../../media/photgraph.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import "./../services/style1.css";

// import required modules
import { EffectCreative } from "swiper";


const Services = () => {
    return (
        <div className={sersty.whole} id="services">

            <div className={sersty.par}><img className={sersty.bordertop} src={bordertop} /></div>
            <h1>Services</h1>
            <div className={sersty.par}><img className={sersty.borderbottom} src={borderbottom} /></div>


            <div className={sersty.servicedivs}>

                <div className={sersty.one}>

                    <Swiper
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        style={{ zIndex: 1 }}
                        loop={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-120%", 0, -500]
                            },
                            next: {
                                shadow: true,
                                translate: ["120%", 0, -500]
                            }
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className="mySwiper2"
                    >
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/8znfwk' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/uwofvv' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/vnpgyc' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/yvvmbz' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/xhaekv' /></SwiperSlide>

                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/4i1qia' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/ng6git' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/dv7sdo' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/ry7fqg' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/ikoxfv' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/tqs3my' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/gv8wwl' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/inuyek' /></SwiperSlide>
                    </Swiper>




                    <div className={sersty.oneinner}>

                        <img src="https://rb.gy/xjc6tt" />

                    </div>
                </div>

                <div className={sersty.two}>
                    <Swiper
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        style={{ zIndex: 1 }}
                        loop={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-120%", 0, -500]
                            },
                            next: {
                                shadow: true,
                                translate: ["120%", 0, -500]
                            }
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className="mySwiper2"
                    >
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/nrspie' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/vxm5nn' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/vfj0ne' /></SwiperSlide>

                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/24oune' /></SwiperSlide>

                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/0kfps2' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/iennfp' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/qxqgrc' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/gx5vtx' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/bnffnd' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/vmoww0' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/zk777e' /></SwiperSlide>
                    </Swiper>



                    <div className={sersty.twoinner}>

                        {/* <h1>Interiors</h1>
                        <h1>&</h1>
                        <h1>Exteriors</h1> */}

                        <img className={sersty.inerimg} src="https://rb.gy/0rjrbj" />
                    </div>
                </div>

                <div className={sersty.three}>
                    <Swiper
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        style={{ zIndex: 1 }}
                        loop={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-120%", 0, -500]
                            },
                            next: {
                                shadow: true,
                                translate: ["120%", 0, -500]
                            }
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className="mySwiper2"
                    >
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/i4afii' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/usgmdi' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/rjduqb' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/gkifie' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/nioo9w' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/1u7azg' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/i5ex8i' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/bmszjo' /></SwiperSlide>
                        <SwiperSlide><img className={sersty.inerimg} src='https://rb.gy/zymf3v' /></SwiperSlide>
                    </Swiper>



                    <div className={sersty.threeinner}>


                        <img className={sersty.inerimg} src="https://rb.gy/7bfsnn" />
                        {/* <img src={threeinner} /> */}
                    </div>
                </div>



            </div>




        </div>
    )
}

export default Services