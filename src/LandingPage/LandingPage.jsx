import React from 'react'
import HeroSection from './Component/HeroSection'
import AboutUS from './Component/AboutUs'
import FaqsSection from './Component/FaqsSection'
import ServiceSection from './Component/ServiceSection'
import HealingPath from './Component/HealingPath'
import CallToAction from './Component/CallToAction'

function LandingPage() {
  return (
    <div>
        <HeroSection/>
        <AboutUS/>
        <FaqsSection/>
        <ServiceSection/>
        <HealingPath/>
        <CallToAction/>
    </div>
  )
}

export default LandingPage