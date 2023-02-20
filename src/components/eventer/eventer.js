import React from 'react'
import eventstyle from "../eventer/eventer.module.scss";
import bordertop from "../../media/bordertop.png";
import borderbottom from "../../media/borderbottom.png";

const Eventer = () => {
    return (
        <div className={eventstyle.whole}>

            <div className={eventstyle.par}><img className={eventstyle.bordertop} src={bordertop} /></div>
            <h1>Event Planner in Visakhapatnam</h1>
            <div className={eventstyle.par}><img className={eventstyle.borderbottom} src={borderbottom} /></div>

            <div className={eventstyle.holdingpara}>
                <div className={eventstyle.quote}><h3>"Make your little steps towards us, we turn them into</h3></div>
                <div className={eventstyle.quote2}><h3>a beautiful memory"</h3></div>

            </div>

            <button className={eventstyle.knowmore}>To know more swipe up</button>



        </div>
    )
}

export default Eventer