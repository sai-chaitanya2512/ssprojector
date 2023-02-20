import React from 'react'
import footsty from "../footer/footer.module.scss"
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, YoutubeFilled, GoogleSquareFilled } from '@ant-design/icons'
const Footer = () => {
  return (
    <div className={footsty.juva}>
      <div className={footsty.whole}>


        <div className={footsty.address}>
          <h1>ADDRESS :</h1>
          <h2>4-125/5,F5,,Ramakrishna</h2>
          <h2>Plaza ,Sujatha Nagar ,Visakhapatnam</h2>
          <h2>Pincode-530051</h2>
          <h2><a href='#' style={{ textDecoration: "none" }}>ssprofiles.in</a></h2>

          <div className={footsty.grid}>
            <div><h2>Call us @</h2></div>
            <div><h2>9182632215,</h2></div>
            <div></div>
            <div><h2>9182351013,</h2></div>
            <div></div>
            <div><h2>9491499194,</h2></div>
          </div>
        </div>


        <div className={footsty.formcontainer}>


          <div className={footsty.formplace}>

            <div className={footsty.name}>
              <h2>Don't Hesitate To Ask</h2>
              <h2>A QUOTE</h2>
            </div>

            <div className={footsty.whiter}>
              <div><input placeholder='Your Name' /></div>
              <div><input placeholder='Email' /></div>
              <div><input placeholder='Telephone' /></div>

              <h3>Enquiry</h3>

              <input type={'checkbox'} />Wedding
              <input type={'checkbox'} />Photograph
              <input type={'checkbox'} />Birthday

              <button>Submit</button>
            </div>
          </div>

          <div className={footsty.para}>
            <h2>Follow Us On Social Networks </h2>
            <FacebookFilled className={footsty.icons} />
            <TwitterSquareFilled className={footsty.icons} />
            <InstagramFilled className={footsty.icons} />
            <YoutubeFilled className={footsty.icons} />
            <GoogleSquareFilled className={footsty.icons} />
          </div>


        </div>


      </div>



      <div className={footsty.change}>


        <div className={footsty.formplace}>

          <div className={footsty.name}>
            <h2>Don't Hesitate To Ask</h2>
            <h2>A QUOTE</h2>
          </div>

          <div className={footsty.whiter}>
            <div><input placeholder='Your Name' /></div>
            <div><input placeholder='Email' /></div>
            <div><input placeholder='Telephone' /></div>

            <h3>Enquiry</h3>

            <input type={'checkbox'} />Wedding
            <input type={'checkbox'} />Photograph
            <input type={'checkbox'} />Birthday

            <button>Submit</button>
          </div>
        </div>

        <div className={footsty.address}>
          <h1>ADDRESS :</h1>
          <h2>4-125/5,F5,,Ramakrishna</h2>
          <h2>Plaza ,Sujatha Nagar ,Visakhapatnam</h2>
          <h2>Pincode-530051</h2>
          <h2><a href='#' style={{ textDecoration: "none" }}>ssprofiles.in</a></h2>

          <div className={footsty.grid}>
            <div><h2>Call us @</h2></div>
            <div><h2>9182632215,</h2></div>
            <div></div>
            <div><h2>9182351013,</h2></div>
            <div></div>
            <div><h2>9491499194,</h2></div>
          </div>
        </div>

        <div className={footsty.para}>
          <h2>Follow Us On Social Networks </h2>
          <FacebookFilled className={footsty.icons} />
          <TwitterSquareFilled className={footsty.icons} />
          <InstagramFilled className={footsty.icons} />
          <YoutubeFilled className={footsty.icons} />
          <GoogleSquareFilled className={footsty.icons} />
        </div>



      </div>


      <h3 className={footsty.copy}>Copyright @ 2016 - 2017 All Right Reserved</h3>
    </div>
  )
}

export default Footer