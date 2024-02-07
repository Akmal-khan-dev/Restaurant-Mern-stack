import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutArrowNarrowRight} from 'react-icons/hi'
const NotFound = () => {
  return (
    <>
      <section className="notFound" >
          <div className="container">
            <img src="/notFound.svg" alt="" />
            <h1>LOOKS LIKE YOU'RE LOST</h1>
            <p>we can't see the page you're looking for</p>
            <Link to={"/"}>Back to home <span><HiOutArrowNarrowRight/></span> </Link>
          </div>
      </section>
    </>
  )
}

export default NotFound
