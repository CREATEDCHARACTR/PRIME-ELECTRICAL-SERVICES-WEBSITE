import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon } from './icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#D4AF37',
    textDecoration: 'underline',
    textUnderlineOffset: '6px'
  };

  const logoUrl = 'https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/5dfdded2fbac523836ea6f493ccfafd84574fda4/6E5280CD-E25E-4340-A845-E837EB5A5BC4.png';

  return (
    <header className="bg-prime-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-prime-gold/10">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="Prime Electrical Services Colorado LLC Logo" className="h-20 md:h-24 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white hover:text-prime-gold transition-colors duration-300 font-medium"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <a href="https://pocketsuite.io/book/prime-electrical-services-colorado" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-prime-gold text-prime-dark font-medium text-sm py-[2px] px-4 rounded-md hover:bg-yellow-300 transition-all duration-300 shadow-md transform hover:scale-105">
            Schedule a Quote
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2 -m-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in-down">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                   className="text-white text-center text-lg hover:text-prime-gold transition-colors duration-300 font-medium py-2"
                   style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                >
                  {link.name}
                </NavLink>
              ))}
               <a href="https://pocketsuite.io/book/prime-electrical-services-colorado" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-prime-gold text-prime-dark text-center font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-all duration-300 shadow-md">
                Schedule a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;