import React from 'react'
import './about.css'
import PicOfMe from './me.jpg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Author'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p>
            Hello! I am Salah. I'm junior software engineer and Full-Stack Web Developer , i'm  computer engineering student at alazhar university  faculty of engineering. Technologies I use are
            php laravel and react. I create responsive websites that are displayed on all devices desktops and smartphones,i'm problem solver and participate in programming contets ICPC 2022
            <h3 class="sal"> Contacts ...</h3>
            <p class="pta">
                    GitHub: <a class="aa" href ="https://github.com/SalahAshawy"   > Salah.github</a>
                </p> 
                <p class="pta">
            Gmail: <span class="aa"   > salahahsawy2018@gmail.com</span>

            </p>
            <p class="pta">
            Linked In:  <a  class="aa" href ="https://www.linkedin.com/in/salah-ashawy4344b7163"> Salah.linkedin</a>

            </p>
            <p class="pta">
            WhatsApp:  <span  class="aa">+201272860656</span>

            </p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
