import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project One.',
    imageUrl: image3,  // Use image3 directly
    githubUrl: 'https://github.com/JoshuAcode200/books-app',
    liveUrl: 'https://books-app-chi-roan.vercel.app/',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project Two.',
    imageUrl: image4,  // Use image4 directly
    githubUrl: 'https://github.com/JoshuAcode200/The-VacaySpot',
    liveUrl: 'https://the-vacay-spot.vercel.app/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A brief description of Project Three.',
    imageUrl: image5,  // Use image5 directly
    githubUrl: 'https://github.com/JoshuAcode200/ninjafood',
    liveUrl: 'https://ninjafood-one.vercel.app/',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A brief description of Project Four.',  // Use string directly
    imageUrl: image6,  // Use image6 directly
    githubUrl: 'https://github.com/JoshuAcode200/Expense-Tracker',
    liveUrl: 'https://expense-tracker-three-dusky.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section className="projects py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[0.9]">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 flex items-center">
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 flex items-center">
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
