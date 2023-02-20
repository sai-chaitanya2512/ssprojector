import React from 'react'
import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";
import sersty from "../services/services.module.scss";
import oneinner from "../../media/wed.jpg"
import twoinner from "../../media/birthday.png"
import threeinner from "../../media/photgraph.jpg"

const Services = () => {
    return (
        <div className={sersty.whole}>

            <div className={sersty.par}><img className={sersty.bordertop} src={bordertop} /></div>
            <h1>Services</h1>
            <div className={sersty.par}><img className={sersty.borderbottom} src={borderbottom} /></div>


            <div className={sersty.servicedivs}>

                <div className={sersty.one}>
                    <div className={sersty.oneinner}>
                        <img src={oneinner} />
                    </div>
                </div>

                <div className={sersty.two}>
                    <div className={sersty.twoinner}>
                        <img src={twoinner} />
                    </div>
                </div>

                <div className={sersty.three}>
                    <div className={sersty.threeinner}>
                        <img src={threeinner} />
                    </div>
                </div>



            </div>




        </div>
    )
}

export default Services