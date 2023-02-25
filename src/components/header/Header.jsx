import React from 'react'
import { Link } from 'react-scroll'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'

const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>web development and Software engineering</h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Designer',
            'Web Developer',
            'problem solver',
            'Software engineer',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link  to="about"  className='btn-main-offer s' spy={true} smooth={true} offset={50} duration={500}>contact me</Link>
       
      </div>
    </section>
  )
}

export default Header
