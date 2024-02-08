import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Hero'
import Celebration from './celebration'
import Reception from './Reception'
import OurStory from './OurStory'
import Gift from './Gift'
import Footer from '../components/footer'
const LandingPage = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>
        <Hero/>
        <Celebration/>
        <Reception/>
        <OurStory/>
        <Gift/>
        <BrowserRouter>
        <Footer/>
        </BrowserRouter>
        
    </div>
  )
}

export default LandingPage