import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Hero'
import Celebration from './celebration'
import Reception from './Reception'
import OurStory from './OurStory'
import Gift from './Gift'
import Message from './Message.jsx'
import Colors from './Colors.jsx'
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
        <Message/>
        <Colors/>
        <BrowserRouter>
        <Footer/>
        </BrowserRouter>
        
    </div>
  )
}

export default LandingPage