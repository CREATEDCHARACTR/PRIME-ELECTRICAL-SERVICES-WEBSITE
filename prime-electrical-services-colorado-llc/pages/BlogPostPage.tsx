import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold text-white">Post not found</h1>
        <p className="text-gray-400 mt-4">Sorry, we couldn't find the blog post you were looking for.</p>
        <Link to="/blog" className="mt-8 inline-block text-prime-gold hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white page-fade-in">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <article>
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="text-gray-400">
                  <span>By {post.author}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{post.date}</span>
                </div>
              </header>
              
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-auto rounded-lg shadow-2xl mb-12 border-4 border-gray-800"
                width="1200"
                height="800"
              />

              <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                {post.content}
              </div>
            </article>
          </AnimatedSection>
          
          <div className="mt-16 border-t border-gray-800 pt-8 text-center">
             <Link 
                to="/blog" 
                className="inline-block bg-transparent border-2 border-prime-gold text-prime-gold font-bold py-3 px-8 rounded-md text-lg hover:bg-prime-gold hover:text-prime-dark transition-all duration-300 transform hover:scale-105"
              >
              &larr; Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
