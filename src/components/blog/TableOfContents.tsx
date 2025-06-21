'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink } from 'react-icons/fa';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  articleRef: React.RefObject<HTMLDivElement | null>;
  title?: string;
  url?: string;
  isMobile?: boolean;
}

export default function TableOfContents({ articleRef, title, url, isMobile = false }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(!isMobile);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!articleRef.current) return;

    const elements = articleRef.current.querySelectorAll('h1, h2, h3, h4');
    const headingElements = Array.from(elements).map((element) => {
      // Generate ID if not present
      if (!element.id) {
        element.id = element.textContent?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || '';
      }
      return {
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName[1]),
      };
    });

    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      if (!articleRef.current) return;
      const { scrollTop, clientHeight } = document.documentElement;
      const articleTop = articleRef.current.offsetTop;
      const articleBottom = articleTop + articleRef.current.offsetHeight;
      const viewportBottom = scrollTop + clientHeight;
      const articleProgress = Math.max(
        0,
        Math.min(
          100,
          ((viewportBottom - articleTop) / (articleBottom - articleTop)) * 100
        )
      );
      setProgress(articleProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [articleRef]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  const handleShare = async (platform: string) => {
    if (typeof window === 'undefined' || !title || !url) return;

    const shareText = `Check out this article: ${title}`;
    const shareUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
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
          // You could add a toast notification here
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
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? -20 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? 'relative bg-gray-50' : 'sticky top-32'} max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#f7c99b]/20 scrollbar-track-transparent p-6 bg-white rounded-xl shadow-sm border border-gray-100 space-y-6`}
    >
      {/* Header and Toggle */}
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-lg font-semibold text-gray-900">Table of Contents</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IoIosArrowForward className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 overflow-hidden"
          >
            {/* Reading Progress */}
            <div className="bg-[#f7c99b]/5 p-4 rounded-lg">
        <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-[#f7c99b]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="text-sm font-medium text-[#f7c99b] mt-3 flex items-center justify-between">
          <span>Reading Progress</span>
          <span className="bg-white px-2 py-1 rounded shadow-sm">{Math.round(progress)}%</span>
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="space-y-1">
        {headings.map((heading, index) => (
          <button
            key={`${heading.id}-${index}`}
            onClick={() => scrollToHeading(heading.id)}
            className={`w-full text-left py-1 px-2 rounded transition-colors duration-200 ${
              activeId === heading.id
                ? 'bg-[#f7c99b]/10 text-[#f7c99b]'
                : 'hover:bg-gray-100 text-gray-600'
            } ${
              heading.level === 2
                ? 'font-medium'
                : heading.level === 3
                ? 'pl-4 text-sm'
                : 'pl-6 text-sm'
            }`}
          >
            {heading.text}
          </button>
        ))}
      </nav>

      {/* Share Section */}
      {!isMobile && title && url && (
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Share Article</h4>
          <div className="flex gap-2">
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full bg-gray-50 hover:bg-[#1877f2] text-gray-600 hover:text-white transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full bg-gray-50 hover:bg-[#1da1f2] text-gray-600 hover:text-white transition-all duration-300"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full bg-gray-50 hover:bg-[#0a66c2] text-gray-600 hover:text-white transition-all duration-300"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="p-2 rounded-full bg-gray-50 hover:bg-[#25d366] text-gray-600 hover:text-white transition-all duration-300"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-600 text-gray-600 hover:text-white transition-all duration-300"
              aria-label="Copy link"
            >
              <FaLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>


    </motion.div>
  );
}
