import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-prime-dark text-white page-fade-in">
      {/* Hero Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            From the <span className="text-prime-gold">Wire</span>: Our Blog
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, tips, and news on all things electrical from the team at Prime Electrical Services.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <AnimatedSection key={post.slug}>
                <div className="bg-black rounded-lg overflow-hidden border border-gray-800 flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-prime-gold/20 h-full">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-prime-gold transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-300 flex-grow mb-4">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="font-semibold text-prime-gold hover:text-yellow-300 transition-colors self-start"
                    >
                      Read More &rarr;
                    </Link>
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
              Have a Question for Our Electricians?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-800 max-w-2xl mx-auto">
              Whether it's inspired by our articles or a unique project you have in mind, we're here to help. Contact us for expert advice and a free quote.
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

export default BlogPage;
