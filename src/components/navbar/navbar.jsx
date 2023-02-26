import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
//import logo from './logo.png'
import './navbar.css'

const navbar = () => {
 
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='about' >

         Eng: Salah Ahmad Salah Elden
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#f9ab00' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
      
              <li className='nav-item'>
                 <Link  to="home"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>home</Link>
              </li>
               <li className='nav-item'>
                 <Link  to="about"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>about</Link>
              </li>
              <li className='nav-item'>
                 <Link  to="services"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>services</Link>
              </li>
               <li className='nav-item'>
                 <Link  to="experience"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>experience</Link>
              </li>
               <li className='nav-item'>
                 <Link  to="portfolio"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>portfolio</Link>
              </li>
               <li className='nav-item'>
                 <Link  to="testimonials"  className='nav-link' spy={true} smooth={true} offset={50} duration={500}>skills</Link>
              </li>
               
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
