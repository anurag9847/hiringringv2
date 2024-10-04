import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Commintment from './components/Commintment'
import WhyChooseUs from './components/WhyChooseUs'
import GetHired from './components/GetHired'
import Future from './components/Future'
import Services from './components/Services'
import Partners from './components/Partners'
import Vetrans from './components/Vetrans'
import Expertise from './components/Expertise'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Consider mobile for screens <= 768px
    }

    handleResize() // Check initial screen size
    window.addEventListener('resize', handleResize) // Add event listener for resizing

    return () => window.removeEventListener('resize', handleResize) // Clean up event listener
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Commintment />
      <WhyChooseUs />
      <GetHired />
      <Future />
      <Services />
      {!isMobile && <Partners />} {/* Render only on larger screens */}
      {!isMobile && <Vetrans />}  {/* Render only on larger screens */}
      <Expertise />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}

export default App
