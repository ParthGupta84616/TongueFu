import React from 'react'
// import Tongue from '../features/tongue_twister/Tongue'
import HeroSection from '../components/home components/HeroSection'
import Features from '../components/home components/Features'
import Stats from '../components/home components/Stats'
import Testimonials from '../components/home components/Testimonials'
import CallToAction from '../components/home components/CallToAction'
import Blog from '../components/home components/Blog'
import { AuroraHero } from '../components/AuroraHero'
function Home() {
  return (
    <div className="bg-slate-900">
      {/* <AuroraHero /> */}.
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
		  <CallToAction/>
		  <Blog/>
    </div>
  )
}

export default Home