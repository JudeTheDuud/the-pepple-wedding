import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
const footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='sect1'>
                <div className='olliep'>
                    MICKEY & OLLIE <br />
                    <span className='footer-hashtag'>#THEPEPPLEWEDDING</span>
                </div>

                <div className='rights'>&copy; 2023 <span>Mickey & Ollie</span></div>
            </div>




            <div className='sec2'>
                <div className='contact'>Contact Us</div>
                <div className='footer-mail'>dummymail@gmail.com</div>
            </div>




            <div className='sec3'>
                <nav className='footer-nav'>
                    <ul>
                        <li><NavLink to= '/'>The Wedding</NavLink></li>
                        <li><NavLink to= '/Story'>Our Story</NavLink></li>
                        <li><NavLink to= '/qa'>Q&A</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    </div>
  )
}

export default footer