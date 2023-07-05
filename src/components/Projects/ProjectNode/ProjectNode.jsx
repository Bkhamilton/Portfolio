import * as React from 'react';
import './ProjectNode.css';

export default function ProjectNode() {
  return (
    <div className='project-node'>
        <div className='project-node-image-cont'>
            IMAGE HERE
            <h1>Project Title</h1>
        </div>
        <div className='project-node-info'>
            <h3>Built With</h3>
            <div className='project-logos'>
                <span>React</span>
                <span>CSS</span>
            </div>
            <div className='project-node-description'>
                <p>
                    This is where the description goes. This describes what the primary function of the website is, and what type of project it is.
                    Whether that be Work, Personal, Proof Of Concept, etc.
                </p>
            </div>
        </div>
      
    </div>
  );
};
