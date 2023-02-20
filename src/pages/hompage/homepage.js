import React from 'react'
import Banner from '../../components/banner/banner'
import Eventer from '../../components/eventer/eventer'
import Footer from '../../components/footer/footer'
import Gallery from '../../components/gallery/gallery'
import Header from '../../components/header/header'
import Services from '../../components/services/services'
import Testmonial from '../../components/testmonials/testmonial'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Eventer />
            <Gallery />
            <Services />
            <Testmonial />
            <Footer/>

        </div>
    )
}

export default Homepage