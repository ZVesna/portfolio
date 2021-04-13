import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
//import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)

  return <nav>
    <div className="navbar">
      <Hamburger
        toggled={isOpen} toggle={setOpen}
      />
      <div className={isOpen ? 'burger' : 'hide'}>
        <a className="anchor" href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
/*   return <div className='navbar'>
    <ul>
      <li>
        <Link to={'/portfolio/about'}>About</Link>
      </li>
      <li>
        <Link to={'/portfolio/skills'}>Skills</Link>
      </li>
      <li>
        <Link to={'/portfolio/projects'}>Projects</Link>
      </li>
      <li>
        <Link to={'/portfolio/contact'}>Contact</Link>
      </li>
    </ul>
  </div> */
}