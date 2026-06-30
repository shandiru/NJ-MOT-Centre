import React from 'react'
import Hero from "../components/Hero";
import HeroMobileFeatures from "../components/HeroMobileFeatures";
import Service from "../components/ServicesSection";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Map from "../components/MapSection"
const Home = () => {
    return (
        <div>
            <Hero />
            <HeroMobileFeatures />
            <About />
            <Service />
            <Review />
            <Contact />
            <Map />
        </div>
    )
}

export default Home
