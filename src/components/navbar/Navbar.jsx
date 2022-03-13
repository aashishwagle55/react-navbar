import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <h1>Logo</h1>
          </Link>
        </div>
        <ul className='nav-links'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/videos'>Videos</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <div className='burger' onClick={navSlide}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </div>
  );
};

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.classList.toggle('toggle-burger');
  nav.classList.toggle('nav-active');

  // animate nav links js
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.4s ${index / 10 + 0.4}s forwards`;
    }
  });
};

export default Navbar;
