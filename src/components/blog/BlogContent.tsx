'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import dynamic from 'next/dynamic';

const MdxRenderer = dynamic(() => import('@/components/MdxRenderer.client'), {
  ssr: false
});
const TableOfContents = dynamic(() => import('@/components/blog/TableOfContents'), {
  ssr: false
});

import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogContentProps {
  post: {
    title: string;
    date: string;
    categories: string[];
    tags: string[];
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogContent({ post, mdxSource }: BlogContentProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const articleRef = useRef<HTMLDivElement>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async (platform: string) => {
    const shareText = `Check out this article: ${post.title}`;
    const shareUrl = typeof window !== 'undefined' ? window.location.href : `/blog/${post.slug}`;
    let platformUrl = '';

    switch (platform) {
      case 'facebook':
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        platformUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        platformUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        platformUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(shareUrl);
          setShowShareTooltip(true);
          setTimeout(() => setShowShareTooltip(false), 2000);
          return;
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
        break;
    }

    if (platformUrl) {
      window.open(platformUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article ref={articleRef} className="min-h-screen text-gray-900 bg-white relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#f7c99b] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-[#f7c99b] text-white shadow-lg hover:shadow-xl hover:bg-[#f7c99b]/90 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <IoIosArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Copy Link Tooltip */}
      <AnimatePresence>
        {showShareTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <header className="mb-8 space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-gray-600 text-base gap-4">
                <time
                  dateTime={post.date}
                  className="bg-[#f7c99b]/20 px-3 py-1.5 text-sm rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <div className="flex gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-[#f7c99b]/20 text-[#47a8a8] px-3 py-1.5 text-sm rounded-lg font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden mb-8">
              <TableOfContents
                articleRef={articleRef}
                title={post.title}
                url={`/blog/${post.slug}`}
                isMobile={true}
              />
            </div>

            {/* MDX Content with Custom Styling */}
            <div className="blog-content">
              <style jsx>{`
                .blog-content :global(h1) {
                  font-size: 2.5rem;
                  font-weight: 700;
                  color: #064e3b;
                  margin-top: 2rem;
                  margin-bottom: 1.5rem;
                  line-height: 1.2;
                }
                
                .blog-content :global(h2) {
                  font-size: 2rem;
                  font-weight: 600;
                  color: #064e3b;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                }
                
                .blog-content :global(h3) {
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #064e3b;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                  line-height: 1.4;
                }
                
                .blog-content :global(p) {
                  font-size: 1.125rem;
                  line-height: 1.7;
                  margin-bottom: 1.5rem;
                }
                
                .blog-content :global(a) {
                  color: #064e3b;
                  text-decoration: none;
                }
                
                .blog-content :global(a:hover) {
                  color: #1d4ed8;
                  text-decoration: underline;
                }
                
                .blog-content :global(strong) {
                  font-weight: 600;
                  color: #064e3b;
                }
                
                .blog-content :global(ul) {
                  margin: 1.5rem 0;
                  padding-left: 1.5rem;
                }
                
                .blog-content :global(li) {
                  margin-bottom: 0.5rem;
                  color: #374151;
                  line-height: 1.6;
                }
                
                .blog-content :global(blockquote) {
                  border-left: 4px solid #3b82f6;
                  padding-left: 1rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  color: #6b7280;
                }
                
                .blog-content :global(code) {
                  background-color: #f3f4f6;
                  padding: 0.125rem 0.25rem;
                  border-radius: 0.25rem;
                  font-size: 0.875rem;
                }
                
                .blog-content :global(pre) {
                  background-color: #064e3b;
                  color: #f9fafb;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                }
                
                .blog-content :global(img) {
                  border-radius: 0.5rem;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                  margin: 1.5rem 0;
                  max-width: 100%;
                  height: auto;
                }
              `}</style>
              <MdxRenderer source={mdxSource} />
            </div>

            <footer className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Article Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f7c99b]/20 text-[#47a8a8] px-5 py-2 rounded-full text-base font-medium hover:bg-[#f7c99b]/50 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-3 rounded-xl bg-[#f7c99b] text-white hover:bg-white hover:text-[#47a8a8] border-2 border-[#f7c99b] hover:border-[#47a8a8] transition-all duration-300"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-3 rounded-xl bg-[#f7c99b] text-white hover:bg-white hover:text-[#47a8a8] border-2 border-[#f7c99b] hover:border-[#47a8a8] transition-all duration-300"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-3 rounded-xl bg-[#f7c99b] text-white hover:bg-white hover:text-[#47a8a8] border-2 border-[#f7c99b] hover:border-[#47a8a8] transition-all duration-300"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-3 rounded-xl bg-[#f7c99b] text-white hover:bg-white hover:text-[#47a8a8] border-2 border-[#f7c99b] hover:border-[#47a8a8] transition-all duration-300"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </footer>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32">
              <TableOfContents
                articleRef={articleRef}
                title={post.title}
                url={`/blog/${post.slug}`}
                isMobile={false}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}