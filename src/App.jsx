import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Commintment from './assets/components/Commintment'
import WhyChooseUs from './assets/components/WhyChooseUs'
import GetHired from './assets/components/GetHired'
import Future from './assets/components/Future'
import Services from './assets/components/Services'
import Partners from './assets/components/Partners'
import Vetrans from './assets/components/Vetrans'
import Expertise from './assets/components/Expertise'
import Timeline from './assets/components/Timeline'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'


function App() {


  return (
    <>
      <Navbar />
      <Hero/>
      <Commintment/>
      <WhyChooseUs/>
      <GetHired/>
      <Future/>
      <Services/>
      <Partners/>
      <Vetrans/>
      <Expertise/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
