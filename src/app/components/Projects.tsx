import React from 'react';
import Heading from './Heading';
import Card from "./Card";


const data = [
  {
    id: 0,
    title: 'Responsive Website',
    descr: 'A multi-page responsive Next.js website using React components with TailwindCSS.',
    img: '/WhatsApp Image 2024-11-09 at 11.46.42 AM.png',
    tags: ["React", "Next.js", 'Node', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 1,
    title: 'Static Interactive Resume',
    descr: 'A Static Resume Builder using HTML, TypeScript, and TailwindCSS.',
    img: '/pic-2.png',
    tags: ['HTML', 'Node', 'TypeScript', 'CSS'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.descr}
        img={el.img}
        tags={el.tags}  
        />))}
      </div>
  </div>
  );
};

export default Projects;
