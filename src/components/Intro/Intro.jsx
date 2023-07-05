import React, { useState, useEffect, useRef } from 'react';
import image from '../../images/JakeTheDog.jpeg';
import { enhance } from '../../helpers/htmlHelpers';
import './Intro.css';
import '../../index.css';

export default function Intro() {
  const [isHoverActive, setIsHoverActive] = useState(false);
  const imageRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // Function to handle image click event
  const handleClick = () => {
    setIsHoverActive(!isHoverActive);
  };

  useEffect(() => {
    enhance(firstNameRef.current);
    enhance(lastNameRef.current);
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        setIsHoverActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id="home" className="intro">
      <div id='text' className='welcome-message'>
        <div className='line'>
          <p className='word'>Hello</p>
          <p className='word'>There</p>
        </div>
        <div className='line'>
          <p className='word'>My Name</p>
          <p className={`word ${isHoverActive ? 'blue-text' : ''}`}>Is</p>
        </div>
        <div className='line'>
          <p ref={firstNameRef} className='word fancy first-name'>Ben</p>
          <p ref={lastNameRef} className='word fancy last-name'>Hamilton</p>
        </div>
      </div>
      <div className='profile-info'>
        <div className='profile-pic' >
          <img ref={imageRef} src={image} className={`pfp-image ${isHoverActive ? 'active-hover' : ''}`} alt="Ben Selfie" draggable={false} onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};