import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'
import {data} from '../restApi.json'

const Navbar = () => {
  const [show, setShow] = useState(false)
  console.log(data)
  return (
    <nav>
       <div className='logo'>
        <img src="./logo.svg" style={{width:"80px"}} alt="" />
       </div>
       <div className={show ? "navLinks showmenu":"navLinks"}>
         <div className="links">
         {
          data[0].navbarLinks.map(
            item =>{
              return(
                <Link to={item.link} key={item.id} spy={true} smooth={true} duration={500}>{item.title}</Link>
              )
            }
          )
        }
         </div>
         <button className='menuBtn'>Our Menu</button>
       </div>
       <div className="hamburger" onClick={()=>setShow(!show)}>
        <GiHamburgerMenu/>
       </div>
    </nav>
  )
}

export default Navbar
