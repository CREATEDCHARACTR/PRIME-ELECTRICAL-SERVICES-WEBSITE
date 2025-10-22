import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { BoltIcon } from '../components/icons';
import AnimatedSection from '../components/AnimatedSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-prime-dark py-16 sm:py-24 page-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Electrical Services
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
            From residential repairs to large-scale commercial installations, we offer a comprehensive range of expert electrical solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICE_CATEGORIES.map((category) => (
            <AnimatedSection key={category.title}>
              <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-prime-gold transition-colors duration-300 flex flex-col h-full">
                <h2 className="text-2xl lg:text-3xl font-bold text-prime-gold mb-4">
                  <span className="mr-3" aria-hidden="true">{category.emoji}</span>
                  {category.title}
                </h2>
                {category.description && (
                  <p className="text-gray-400 mb-6 italic">{category.description}</p>
                )}
                <ul className="space-y-3 text-gray-300 flex-grow">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start">
                      <BoltIcon className="w-5 h-5 text-prime-gold mt-1 mr-3 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-20 text-center border-t border-gray-800 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't See Your Service Listed?
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Our expertise covers all facets of electrical work. If you have a custom project or a unique requirement, please contact us for a personalized consultation.
              </p>
              <a
                href="https://pocketsuite.io/book/prime-electrical-services-colorado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-prime-gold text-prime-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Get a Custom Quote
              </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServicesPage;
