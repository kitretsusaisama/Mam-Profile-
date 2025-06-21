'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabContent = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); 

  const tabs: TabContent[] = [
    {
      id: 1,
      title: "Adult Mental Health",
      description:
        "Comprehensive support for stress, anxiety, depression, OCD, PTSD, and bipolar disorder through evidence-based therapies tailored to adult mental health needs.",
      buttonText: "Book Appointment",
      image: "/images/happy-couple.jpg",   
    },
    {
      id: 2,
      title: "Relationship Counselling",
      description:
        "Expert guidance for couples and individuals facing relationship challenges, communication issues, emotional disconnection, and marital conflict resolution.",
      buttonText: "Explore Services",
      image: "/images/Happy-couples.jpg",
    },
    {
      id: 3,
      title: "Child Counselling",
      description:
        "Therapy for children with developmental delays, ADHD, autism, behavioral issues, and learning difficulties—using child-friendly, evidence-based approaches.",
      buttonText: "Contact Us",
      image: "/images/child.jpg",
    },
  ];
  
  

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(0);
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, tabs.length]);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 0 : 1);
    setActiveTab(index);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setDirection(1);
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setDirection(0);
    setActiveTab((prev) => (prev + 1) % tabs.length);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="relative h-full mx-auto">
        <AnimatePresence custom={direction} initial={false}>
          {tabs.map((tab, index) => (
            index === activeTab && (
              <motion.div
                key={tab.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#47a8a8]/40 via-[#6f42c1]/50 to-[#ff6b6b]/60 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
                </div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="container max-w-xl lg:max-w-6xl mx-auto px-6 z-10 text-white relative"
                >
                  <h1 className="text-[#47a8a8] text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
                    {tab.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 max-w-3xl drop-shadow-sm">
                    {tab.description}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#47a8a8] hover:bg-white hover:text-[#47a8a8] transition-all duration-300 text-white border-white border font-medium py-4 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50 shadow-lg"
                  >
                    {tab.buttonText}
                  </motion.button>
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Tab Indicators */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center space-x-2">
        {tabs.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`h-2.5 rounded-full ${index === activeTab
              ? 'bg-[#47a8a8] w-8'
              : 'bg-white/50 hover:bg-white/75 w-2.5'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Arrows */}
      <motion.button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors hidden md:block"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors hidden md:block"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Hero;