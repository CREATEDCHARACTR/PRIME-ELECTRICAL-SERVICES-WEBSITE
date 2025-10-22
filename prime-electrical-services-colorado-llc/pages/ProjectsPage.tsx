import React from 'react';
import { PROJECTS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-prime-dark text-white page-fade-in">
      {/* Hero Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A portfolio of our commitment to quality, safety, and excellence in electrical services across Colorado.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <AnimatedSection key={project.title}>
                <div className="bg-black rounded-lg overflow-hidden border border-gray-800 flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-prime-gold/20 h-full">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <span className="inline-block bg-prime-gold text-prime-dark text-xs font-bold mr-3 mb-3 px-2 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-prime-gold text-sm font-semibold mb-4">{project.location}</p>
                    <p className="text-gray-400 text-sm flex-grow">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-prime-gold">
        <div className="container mx-auto py-16 px-6 sm:py-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-prime-dark sm:text-4xl">
              Inspired by Our Work?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-800 max-w-2xl mx-auto">
              Let's build your next project together. Contact us for a free, no-pressure consultation and see how we can bring your vision to life.
            </p>
            <a
                href="https://pocketsuite.io/book/prime-electrical-services-colorado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-prime-gold bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
                Get Your Free Quote
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
