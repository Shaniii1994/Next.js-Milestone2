import React from 'react';
import Heading from './Heading';
import '@/app/styles/Projects.css'; 

const data = [
  {
    id: 0,
    title: 'Responsive Website',
    descr: 'A multi-page responsive Next.js website using React components with TailwindCSS.',
    img: '/WhatsApp Image 2024-11-09 at 11.46.42 AM.jpeg',
    tags: ['Next.js', 'Node', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 1,
    title: 'Static Interactive Resume',
    descr: 'A Static Resume Builder using HTML, TypeScript, and TailwindCSS.',
    img: '/pic-2.jpeg',
    tags: ['HTML', 'TypeScript', 'TailwindCSS'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <div key={el.id} className="project-card">
            <img src={el.img} alt={el.title} className="project-img" />
            <div className="card-content">
              <h3 className="project-title">{el.title}</h3>
              <p className="project-description">{el.descr}</p>
              <div className="tags">
                {el.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
