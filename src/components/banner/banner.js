import React from 'react'
import bannerstyle from "../banner/banner.module.scss"
import bannerimg from "../../media/1.jpg"
import six from "../../media/6.jpg"
import sixone from "../../media/6.1.jpg"
import sixtwo from "../../media/6.2.jpg"
const Banner = () => {
    return (
        <div className={bannerstyle.whole}>

            <img className={bannerstyle.imag} src={bannerimg} />

            <div className={bannerstyle.floatingpara}>

                <h3>welcome to</h3>
                <h1>solution dictionary</h1>
                <h4>Raise a request, we provide you the best service.</h4>
                <h4>With the true meaning of beautiful house</h4>

            </div>

            <img className={bannerstyle.six} src={six} />
            <img className={bannerstyle.sixone} src={sixone} />
            <img className={bannerstyle.sixtwo} src={sixtwo} />



        </div>
    )
}

export default Banner