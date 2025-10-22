import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from './icons';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = 'https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/5dfdded2fbac523836ea6f493ccfafd84574fda4/6E5280CD-E25E-4340-A845-E837EB5A5BC4.png';

  return (
    <footer className="bg-black text-gray-300 border-t-2 border-prime-gold">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info - Spans 2 cols on large screens for emphasis */}
          <div className="lg:col-span-2">
             <Link to="/" className="flex items-center mb-4">
                <img src={logoUrl} alt="Prime Electrical Services Colorado LLC Logo" className="h-20" />
            </Link>
            <p className="text-sm">
              Your trusted, licensed, and insured family-owned electrical contractor in Colorado.
            </p>
             <div className="mt-4 flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-prime-gold"/>
                <a href="tel:720-555-0123" className="hover:text-prime-gold transition-colors">(720) 555-0123</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-prime-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Denver Metro Area</li>
              <li>Boulder County</li>
              <li>Aurora & Centennial</li>
              <li>Littleton & Highlands Ranch</li>
              <li>And Surrounding Areas</li>
            </ul>
          </div>
          
          {/* Call to Action - Spans 2 cols on large screens for balance */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Ready for an Upgrade?</h3>
            <p className="mb-4 text-sm">Get a free, no-obligation quote from our master electrician.</p>
            <a href="https://pocketsuite.io/book/prime-electrical-services-colorado" target="_blank" rel="noopener noreferrer" className="inline-block bg-prime-gold text-prime-dark font-bold py-2 px-6 rounded-md hover:bg-yellow-300 transition-all duration-300 shadow-md transform hover:scale-105">
              Book Now
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Prime Electrical Services Colorado LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;