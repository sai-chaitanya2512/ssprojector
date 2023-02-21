import React from 'react'
import headstyle from "../header/header.module.scss";
// import logo from "./src/media/LOGOpng.png"

const Header = () => {
    return (
        <>
            <div className={headstyle.navbar}>
                <img className={headstyle.logo} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1676715197/LOGO_SS_NEW_png_tkv1ei.png" />

                <ul type="none">
                    <li><a style={{textDecoration:"none",color:"black"}} href='#contact'>About Us</a></li>
                    <li><a style={{textDecoration:"none",color:"black"}} href='#services'> Services</a></li>
                    <li><a style={{textDecoration:"none",color:"black"}} href='#portfolio'>Portfolio</a></li>
                    <li><a style={{textDecoration:"none",color:"black"}} href='#contact'>Contact details</a></li>
                </ul>

            </div>
        </>
    )
}

export default Header