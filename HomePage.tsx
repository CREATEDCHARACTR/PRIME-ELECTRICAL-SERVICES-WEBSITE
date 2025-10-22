import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, PROJECTS } from '../constants';
import { ShieldCheckIcon, HeartIcon, StarIcon } from '../components/icons';
import CircuitBackground from '../components/CircuitBackground';
import AnimatedSection from '../components/AnimatedSection';

// Hero Section Component
const HeroSection: React.FC = () => (
  <div className="relative text-white text-center py-20 md:py-32 px-6 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url('https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/5dfdded2fbac523836ea6f493ccfafd84574fda4/D92B6AEE-D04A-43A6-8E84-1870E01FD642.png')" }}>
    <div className="container mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
        Master Electricians for Your Colorado Home & Business
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
        Providing expert residential and commercial electrical services. We are licensed, insured, and family-owned.
      </p>
      <a
        href="https://pocketsuite.io/book/prime-electrical-services-colorado"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-prime-gold text-prime-dark font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105"
      >
        Schedule Your Free Quote
      </a>
    </div>
  </div>
);

// About Section Component
const AboutSection: React.FC = () => (
  <div className="bg-black py-16 sm:py-24">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          Your <span className="text-prime-gold">Trusted</span> Family-Owned Electrical Experts
        </h2>
        <p className="text-gray-300 mb-6">
          At Prime Electrical Services, we're more than just contractors; we're your neighbors. As a family-run business led by a Master Electrician, we bring a personal commitment to every project. We believe in honest work, fair pricing, and building lasting relationships with our clients.
        </p>
        <ul className="space-y-4 text-gray-200">
          <li className="flex items-center space-x-3">
            <ShieldCheckIcon className="h-6 w-6 text-prime-gold flex-shrink-0" />
            <span><strong>Master Electrician Led:</strong> Ensuring the highest level of expertise and safety.</span>
          </li>
          <li className="flex items-center space-x-3">
            <ShieldCheckIcon className="h-6 w-6 text-prime-gold flex-shrink-0" />
            <span><strong>Licensed & Insured:</strong> Complete peace of mind for your property and project.</span>
          </li>
          <li className="flex items-center space-x-3">
            <ShieldCheckIcon className="h-6 w-6 text-prime-gold flex-shrink-0" />
            <span><strong>Satisfaction Guaranteed:</strong> If there’s a problem, we come back and fix it. Period.</span>
          </li>
        </ul>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/1646a50b92c0712682ed276f1a3a5f95a2d4da18/AFA5A58F-E466-47F6-927C-7A48BE793734.png"
          alt="Master electrician and owner of Prime Electrical Services"
          className="rounded-lg shadow-2xl w-full h-auto object-cover"
          loading="lazy"
          width="600"
          height="400"
        />
      </div>
    </div>
  </div>
);

// Why Choose Us Section
const WhyChooseUsSection: React.FC = () => (
  <div className="bg-black py-16 sm:py-24">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
        Why Choose <span className="text-prime-gold">Prime Electrical Services</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center p-6">
          <ShieldCheckIcon className="h-12 w-12 text-prime-gold mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
          <p className="text-gray-400">
            Our work isn't done until you are completely satisfied. We stand behind our quality and will make it right, no questions asked.
          </p>
        </div>
        <div className="flex flex-col items-center p-6">
          <HeartIcon className="h-12 w-12 text-prime-gold mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Family-Owned Values</h3>
          <p className="text-gray-400">
            As a local, family-run business, we treat your home like our own. Expect honest communication, fair pricing, and a personal touch.
          </p>
        </div>
        <div className="flex flex-col items-center p-6">
          <StarIcon className="h-12 w-12 text-prime-gold mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Master Electrician Expertise</h3>
          <p className="text-gray-400">
            Every project is overseen by a certified Master Electrician, ensuring the highest standards of safety, quality, and code compliance.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Trust Badges Section
const TrustBadgesSection: React.FC = () => (
  <div className="bg-prime-dark py-16 sm:py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Your Assurance of Quality</h2>
        <p className="mt-4 text-lg text-gray-400">We are fully certified and committed to the highest standards of safety and professionalism.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center p-4 border-2 border-prime-gold rounded-lg w-48 min-h-[160px] justify-center">
          <ShieldCheckIcon className="h-10 w-10 text-prime-gold mb-2" />
          <h3 className="font-bold text-white">Master Electrician</h3>
          <p className="text-sm text-gray-400">Led by a certified Master Electrician.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 border-2 border-prime-gold rounded-lg w-48 min-h-[160px] justify-center">
          <ShieldCheckIcon className="h-10 w-10 text-prime-gold mb-2" />
          <h3 className="font-bold text-white">Licensed & Insured</h3>
          <p className="text-sm text-gray-400">Full coverage for your peace of mind.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 border-2 border-prime-gold rounded-lg w-48 min-h-[160px] justify-center">
          <ShieldCheckIcon className="h-10 w-10 text-prime-gold mb-2" />
          <h3 className="font-bold text-white">Family Owned</h3>
          <p className="text-sm text-gray-400">Proudly serving our Colorado community.</p>
        </div>
         <div className="flex flex-col items-center text-center p-4 border-2 border-prime-gold rounded-lg w-48 min-h-[160px] justify-center">
          <ShieldCheckIcon className="h-10 w-10 text-prime-gold mb-2" />
          <h3 className="font-bold text-white">Satisfaction Guaranteed</h3>
          <p className="text-sm text-gray-400">We stand behind our workmanship.</p>
        </div>
      </div>
    </div>
  </div>
);

// Services Section Component
const ServicesSection: React.FC = () => (
  <div className="py-16 sm:py-24 bg-prime-dark">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Our Premier Services</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
        From small repairs to major installations, we handle all your electrical needs with precision and care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.title} className="bg-black p-8 rounded-lg border border-gray-800 hover:border-prime-gold hover:shadow-2xl hover:shadow-prime-gold/10 transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-prime-dark p-4 rounded-full">
                <service.icon className="h-8 w-8 text-prime-gold" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Recent Projects Section Component
const RecentProjectsSection: React.FC = () => (
  <div className="py-16 sm:py-24 bg-black">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Our Recent Projects</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
        A look at the quality and variety of our work across the Front Range.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-prime-gold">{project.location}</p>
              <a href={project.path} className="mt-4 text-white font-semibold self-start opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Testimonials Section Component
const TestimonialsSection: React.FC = () => (
  <div className="py-16 sm:py-24 bg-black overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Clients Are Saying</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          We pride ourselves on quality work and happy customers.
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-8 pb-4 -mx-6 px-6 snap-x snap-mandatory">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.author} className="flex flex-col bg-prime-dark p-8 rounded-lg border border-gray-800 w-11/12 sm:w-2/3 md:w-1/2 lg:w-[400px] flex-shrink-0 snap-center">
            <blockquote className="text-gray-300 flex-grow">
              <p>“{testimonial.quote}”</p>
            </blockquote>
            <footer className="mt-6">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-prime-gold">{testimonial.location}</p>
            </footer>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
          to="/reviews" 
          className="inline-block bg-transparent border-2 border-prime-gold text-prime-gold font-bold py-3 px-8 rounded-md text-lg hover:bg-prime-gold hover:text-prime-dark transition-all duration-300 transform hover:scale-105"
        >
          View All Reviews
        </Link>
      </div>
    </div>
  </div>
);

// CTA Section Component
const CTASection: React.FC = () => (
  <div className="bg-prime-gold">
    <div className="container mx-auto py-16 px-6 sm:py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-prime-dark sm:text-4xl">
        Ready to Power Up Your Project?
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-800 max-w-2xl mx-auto">
        Don't settle for less. Contact Prime Electrical Services today for a free, no-pressure consultation and quote. Let's discuss how we can bring your vision to life, safely and efficiently.
      </p>
      <a
        href="https://pocketsuite.io/book/prime-electrical-services-colorado"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-prime-gold bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
      >
        Request Service Now
      </a>
    </div>
  </div>
);

// Main HomePage Component
const HomePage: React.FC = () => {
  return (
    <div className="page-fade-in">
      <CircuitBackground />
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUsSection />
      </AnimatedSection>
      <AnimatedSection>
        <TrustBadgesSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection>
        <RecentProjectsSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <CTASection />
    </div>
  );
};

export default HomePage;
