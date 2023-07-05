import * as React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-me">
      <header className="about-me-header">
        <h1>About Me</h1>
        <h3>I am a Software Engineer</h3>
        <h3>I am the Co-Host of an NBA-centered Podcast</h3>
      </header>
      <div className='about-me-logo'>
        <span>HTML</span>
        <span>JS</span>
        <span>CSS</span>
        <span>React</span>
        <span>React Native</span>
        <span>Tailwind</span>
      </div>
    </div>
  );
};
