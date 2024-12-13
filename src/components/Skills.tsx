import React from 'react';
import '@/app/styles/Skills.css';

const Skills = () => {
  return (
    <div className='skills-container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center text-orange-600 hover:text-yellow-500'>
        <div>
          <h2 className='skills-heading'>
            Languages I work with
          </h2>
          <p className='skills-description'>
            I have a good command in Web development, HTML, CSS, Javascript, Node.js, Next.js ,Typescript and Tailwind css.
          </p>
        </div>
        <div className='skills-list'>
          <div className='skills-column'>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>Node.js</h3>
            <h3>Next.js</h3>
            <h3>Typescript</h3>
            <h3>Tailwind Css</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
