import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food</p>
            </div>
            <p className="mid">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi fugiat architecto consequatur, alias soluta perspiciatis, dolorum animi porro odio tempore ducimus enim ab deserunt placeat nemo adipisci, odit exercitationem!
            </p>
            <Link to={"/"}>
               Explore Menu <span> <HiOutlineArrowNarrowRight/> </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="image loading" />
        </div>
      </div>
    </section>
  )
}

export default About
