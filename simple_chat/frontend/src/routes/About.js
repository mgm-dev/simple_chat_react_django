import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-grid'>
        <div className='grid-item'>
          <img src={'/static/react-logo.png'} alt='' />
          <h2>ReactJS</h2>
          <p>Front-End of this site was developed via reactJS</p>
        </div>
        <div className='grid-item'>
          <img src={'/static/django-logo.png'} alt='' />
          <h2>Django</h2>
          <p>Back-End of this site was developed via django</p>
        </div>
        <div className='grid-item'>
          <img src={'/static/webrtc-logo.png'} alt='' />
          <h2>webRTC</h2>
          <p>This site also utilizes webRTC & expressJS & socketIO</p>
        </div>
      </div>
    </div>
  );
}
