import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <div className='nav-bar'>
      <div className='container'>
        <div>
          <img id='logo-image' src={'/static/logo.png'} alt='logo' />
          <span id='title'>SimpleChat</span>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/mypage'>Mypage</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
