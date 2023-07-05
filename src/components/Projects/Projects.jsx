import * as React from 'react';
import { useRef, useEffect } from 'react';
import ProjectNode from './ProjectNode/ProjectNode';
import './Projects.css';

export default function Projects() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Header is visible
          entry.target.classList.add('visible');
        } else {
          // Header is not visible
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.3,
    });

    const currentHeaderRef = headerRef.current; // Create a local variable

    observer.observe(currentHeaderRef);

    return () => {
      observer.unobserve(currentHeaderRef);
    };
  }, []);

  return (
    <div id="projects" className="projects">
      <div ref={headerRef} className="projects-header">
        <div className='header-text'>
          <h1>Projects</h1>
        </div>
        <div className='projects-list'>
          <ProjectNode/>
          <ProjectNode/>
          <ProjectNode/>
        </div>
      </div>
    </div>
  );
};
