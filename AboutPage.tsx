import React from 'react';
import { UserCircleIcon, HeartIcon, StarIcon } from '../components/icons';
import Map from '../components/Map'; // Import the new Map component
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-prime-dark text-white page-fade-in">
      {/* Hero Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            A Commitment to <span className="text-prime-gold">Excellence</span> and <span className="text-prime-gold">Community</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about the values and the people behind Prime Electrical Services.
          </p>
        </div>
      </div>

      {/* Owner Profile Section */}
      <AnimatedSection>
        <div className="py-16 sm:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img
                src="https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/e31ff9e0d7d789e5d6dc3f7adb49ef5b33d90dd1/A3BB4DC5-3B34-4462-AE53-10208709E854.png"
                alt="Jeremiah Brown, Master Electrician and owner of Prime Electrical Services"
                className="rounded-lg shadow-2xl w-full h-auto object-cover border-4 border-prime-gold"
                loading="lazy"
                width="500"
                height="600"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Meet Jeremiah Brown
              </h2>
              <p className="text-prime-gold font-semibold text-lg mb-6">Master Electrician & Founder</p>
              <div className="space-y-4 text-gray-300">
                <p>
                  Jeremiah Brown walked from the football field to the job site with the same promise he made to himself on day one. Build with discipline. Show up with consistency. Finish with hard work. Those habits now sit at the heart of Prime Electrical Services.
                </p>
                <p>
                  He always dreamed of a company that stood for excellence, leadership, and legacy. That vision sharpened in college under Hall of Famer Deion Coach Prime Sanders, whose influence reached far beyond the scoreboard. Coach Prime drilled home a simple truth. Success is won in the small things done right, every single day, with purpose.
                </p>
                <p>
                  Prime is not just a name. It is a mindset. Every wire, every fixture, every project is handled with the precision and accountability demanded on the field. Jeremiah kept the basics. Arrive early. Stay consistent. Never cut corners. Treat every customer like family and every job like game day.
                </p>
                 <p>
                  Today Prime Electrical Services serves homes and businesses across Colorado with honest, high quality electrical work grounded in integrity. The mission is simple. Build what lasts. Lead with character. Leave every space better than he found it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <AnimatedSection>
        <div className="bg-black py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="flex flex-col items-center p-4">
                      <StarIcon className="h-12 w-12 text-prime-gold mb-4" />
                      <h3 className="text-xl font-bold mb-2">Uncompromising Quality</h3>
                      <p className="text-gray-400">We use the best materials and practices to deliver work that is safe, reliable, and built to last. Our Master Electrician oversees every project.</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <UserCircleIcon className="h-12 w-12 text-prime-gold mb-4" />
                      <h3 className="text-xl font-bold mb-2">Customer-First Approach</h3>
                      <p className="text-gray-400">Your satisfaction is our priority. We listen to your needs, communicate clearly, and guarantee our workmanship.</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                      <HeartIcon className="h-12 w-12 text-prime-gold mb-4" />
                      <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                      <p className="text-gray-400">As a local, family-owned business, we are invested in our community's safety and well-being. We're your neighbors, here to help.</p>
                  </div>
              </div>
          </div>
        </div>
      </AnimatedSection>


      {/* Business Details Section */}
      <AnimatedSection>
        <div className="py-16 sm:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-prime-gold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-lg">
                <li><span className="font-semibold text-white">Monday - Friday:</span> 7:00 AM – 5:00 PM</li>
                <li><span className="font-semibold text-white">Saturday - Sunday:</span> 24/7 for Emergency Repairs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-prime-gold mb-4">Primary Service Areas</h3>
              <p className="text-lg text-gray-300">We proudly serve the entire Denver Metro area and surrounding communities, including Boulder, Aurora, Littleton, and beyond. If you're in the Front Range, give us a call!</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Domain Map Section */}
      <AnimatedSection>
        <div className="bg-black py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Our Service Domain</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                We proudly serve the entire Denver metro area and the surrounding Front Range communities. Below is an interactive map of our primary service domain.
              </p>
              <div className="max-w-5xl mx-auto border-4 border-prime-gold rounded-lg shadow-2xl overflow-hidden">
                <Map />
              </div>
          </div>
        </div>
      </AnimatedSection>

       {/* CTA Section */}
      <div className="bg-prime-gold">
        <div className="container mx-auto py-16 px-6 sm:py-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-prime-dark sm:text-4xl">
                Partner with an Electrician You Can Trust
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-800 max-w-2xl mx-auto">
                Experience the Prime Electrical difference. Contact us today for a free consultation and let us handle your next project with the expertise it deserves.
            </p>
            <a
                href="https://pocketsuite.io/book/prime-electrical-services-colorado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-prime-gold bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
                Schedule Your Free Quote
            </a>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;