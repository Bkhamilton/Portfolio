import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;