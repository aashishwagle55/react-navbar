import React, { Fragment } from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar'>
        <div className='logo' onClick={() => console.log('clicked logo ...')}>
          <h1>Logo</h1>
        </div>
        <ul className='nav-links'>
          <li className='nav-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Videos</a>
          </li>
          <li className='nav-item'>
            <a href='#'>About</a>
          </li>
        </ul>
        <div className='burger' onClick={navSlide}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </Fragment>
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
