import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-orange-500 pt-2'>
          I have a good command in Web development, HTML, CSS, Javascript, Node.js, Next.js ,Typescript and Tailwind css.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-yellow-400 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2>Typescript</h2>
            <h2>React.js</h2>
            <h2>Next.js</h2>
          </div>
          <div className='space-y-2 text-yellow-300'>
            <h2>Tailwind</h2>
            <h2>CSS</h2>
            <h2>Node.js</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
