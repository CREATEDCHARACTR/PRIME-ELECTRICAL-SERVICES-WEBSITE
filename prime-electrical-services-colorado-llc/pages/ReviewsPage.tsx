import React from 'react';
import { TESTIMONIALS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const ReviewsPage: React.FC = () => {
  return (
    <div className="bg-prime-dark text-white page-fade-in">
      {/* Hero Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hear From Our <span className="text-prime-gold">Happy Clients</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud of our work, but we're even prouder of the relationships we've built. See what our customers have to say.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <AnimatedSection key={testimonial.author}>
                <div className="flex flex-col bg-black p-8 rounded-lg border border-gray-800 shadow-lg hover:shadow-prime-gold/20 transform hover:-translate-y-2 transition-all duration-300 h-full">
                  <blockquote className="text-gray-300 flex-grow">
                    <p>“{testimonial.quote}”</p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-prime-gold">{testimonial.location}</p>
                  </footer>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      
      {/* Yelp Integration Section */}
      <AnimatedSection>
        <div className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Reputation Speaks for Itself</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                  Check out our profile on Yelp to read more reviews from our valued clients across the Front Range.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                      href="https://www.yelp.com/biz/prime-electrical-services-colorado-denver" // Replace with actual Yelp URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-prime-gold text-prime-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-all duration-300 shadow-md transform hover:scale-105"
                  >
                      Read Reviews on Yelp
                  </a>
                  <a
                      href="https://www.yelp.com/writeareview/biz/..." // Replace with actual Yelp "Write a Review" URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-transparent border-2 border-prime-gold text-prime-gold font-bold py-3 px-8 rounded-md text-lg hover:bg-prime-gold hover:text-prime-dark transition-all duration-300 transform hover:scale-105"
                  >
                      Leave a Review
                  </a>
              </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <div className="bg-prime-gold">
        <div className="container mx-auto py-16 px-6 sm:py-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-prime-dark sm:text-4xl">
              Ready to Experience 5-Star Service?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-800 max-w-2xl mx-auto">
                Become our next success story. Contact us today for a free, no-pressure consultation for your electrical project.
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

export default ReviewsPage;
