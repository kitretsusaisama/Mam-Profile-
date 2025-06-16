'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Child Development & Special Needs",
      desc: "Early intervention and developmental support for children with unique needs.",
      benefits: [
        "Diagnosis of autism, ADHD, cerebral palsy, and learning disabilities",
        "Remedial therapy and behavioral support for children",
        "Parental guidance and multidisciplinary care",
      ],
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      decoration:
        "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
      color: "emerald",
      stats: "500+ children helped",
    },
    {
      title: "Couples & Marital Counseling",
      desc: "Guidance for couples to build healthier, stronger relationships.",
      benefits: [
        "Conflict resolution and emotional reconnection",
        "Therapy for improving communication and intimacy",
        "Support for navigating life transitions together",
      ],
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      decoration:
        "bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-purple-500/10",
      color: "rose",
      stats: "300+ couples supported",
    },
    {
      title: "Psychological Assessments",
      desc: "In-depth psychological testing for accurate diagnosis and treatment planning.",
      benefits: [
        "MMPI, Rorschach, IQ, and neuropsychological tests",
        "Behavioral and developmental assessments",
        "Customized evaluations for children and adults",
      ],
      gradient: "from-indigo-400 via-blue-500 to-violet-600",
      decoration:
        "bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-violet-500/10",
      color: "indigo",
      stats: "1000+ assessments completed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -20,
      scale: 1.02,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingElements = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative py-8 md:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <motion.div
        variants={floatingElements}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingElements}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingElements}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Enhanced Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold leading-tight text-[#47a8a8]"
          >
            Our Services
          </motion.h2>
        </motion.div>

        {/* Enhanced Services cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden transition-all duration-500"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 ${service.decoration} opacity-0 group-hover:opacity-100 transition-all duration-700`}
                animate={
                  hoveredCard === index
                    ? { scale: 1.1, rotate: 2 }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500`}
              />

              <div className="relative h-full flex flex-col p-4 lg:p-6 z-10">
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`px-3 py-1 text-xs font-medium text-[#47a8a8] bg-${service.color}-50 rounded-full border border-${service.color}-200`}
                  >
                    {service.stats}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif tracking-tight leading-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 flex items-center">
                    <div
                      className={`w-1 h-4 bg-gradient-to-b ${service.gradient} rounded-full mr-2`}
                    ></div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start group/item"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`w-2 h-2 mt-2 bg-gradient-to-r ${service.gradient} mr-4 mt-0.5 flex-shrink-0 shadow-sm rotate-45`}
                        ></div>
                        <span className="text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group/btn`}
                  >
                    <span>Learn More</span>
                    <FaAngleRight
                      size={22}
                      className="ml-1 transform transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
