import React from 'react';
import ContactForm from '../components/ContactForm';
import PocketSuiteWidget from '../components/PocketSuiteWidget';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-prime-dark text-white page-fade-in">
      {/* Hero Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in <span className="text-prime-gold">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help with all your electrical needs. Reach out today to schedule a service or get a free, no-obligation quote.
          </p>
        </div>
      </div>

      {/* Form and Info Section */}
      <AnimatedSection>
        <div className="py-16 sm:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-black p-8 rounded-lg border border-gray-800">
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 bg-black p-8 rounded-lg border border-gray-800">
                  <h2 className="text-3xl font-bold text-prime-gold mb-6">Contact Info</h2>
                  <div className="space-y-6 text-gray-300">
                      <div>
                          <h3 className="font-semibold text-white text-lg">Phone:</h3>
                          <a href="tel:720-555-0123" className="hover:text-prime-gold transition-colors text-lg">(720) 555-0123</a>
                          <p className="text-sm text-gray-400">Call us for immediate assistance.</p>
                      </div>
                      <div>
                          <h3 className="font-semibold text-white text-lg">Email:</h3>
                          <a href="mailto:contact@primeelectricalco.com" className="hover:text-prime-gold transition-colors text-lg">contact@primeelectricalco.com</a>
                          <p className="text-sm text-gray-400">For inquiries and quotes.</p>
                      </div>
                      <div>
                          <h3 className="font-semibold text-white text-lg">Business Hours:</h3>
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Emergency services available 24/7.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* PocketSuite Booking Widget Section */}
      <AnimatedSection>
        <div className="bg-black py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Schedule Your Service Instantly
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                  The fastest way to get on our calendar. Book your free quote or service call directly through our secure portal.
              </p>
              <div className="max-w-4xl mx-auto">
                <PocketSuiteWidget />
              </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
