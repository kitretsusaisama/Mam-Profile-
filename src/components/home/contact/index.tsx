import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[450px] sm:h-[550px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#47a8a8] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="text-center px-4 z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <p className="text-white/80 text-sm font-medium">
                Available for consultation
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Talk to the{" "}
            <span className="bg-[#47a8a8] bg-clip-text text-transparent">
              Expert
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed"
          >
            Best Child & Adolescent Psychologist in Delhi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center space-x-6 text-white/70">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Online Available</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        <Image
          src="/images/doctor-with-patient.jpg"
          alt="Professional consultation"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center py-16 sm:py-20">
        {/* Enhanced Background */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/psychologist.jpg"
            alt="Professional background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/50 to-slate-900/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-2xl w-full px-4 sm:px-6 md:px-8">
          <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
          >
            {/* Contact Form */}
            <div className="relative p-4 md:p-8">
              <div className="mb-10">
                <p className="text-[#47a8a8] font-semibold text-sm uppercase tracking-wider text-center">
                  Contact Us
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      required
                      className="w-full border-2 text-sm border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      required
                      className="w-full border-2 text-sm border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="w-full border-2 text-sm border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 **** **** **"
                      className="w-full border-2 text-sm border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300"
                    />
                  </motion.div>
                </div>

                <motion.div variants={inputVariants} whileFocus="focus">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300"
                  />
                </motion.div>

                <motion.div variants={inputVariants} whileFocus="focus">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Please describe your concerns or questions in detail..."
                    required
                    className="w-full border-2 text-sm border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#47a8a8] focus:ring-4 focus:ring-[#47a8a8]/10 transition-all duration-300 text-slate-700 placeholder-slate-400 bg-white/80 backdrop-blur-sm shadow-sm hover:border-slate-300 resize-none"
                  />
                </motion.div>

                <div className="pt-2">
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 text-[#47a8a8] border-2 text-sm border-slate-300 rounded-md focus:ring-[#47a8a8] focus:ring-2 mt-0.5 bg-white/80"
                    />
                    <label
                      htmlFor="consent"
                      className="ml-3 text-sm text-slate-600 leading-relaxed"
                    >
                      I agree to the{" "}
                      <span className="text-[#47a8a8] font-medium hover:underline cursor-pointer">
                        privacy policy
                      </span>{" "}
                      and{" "}
                      <span className="text-[#47a8a8] font-medium hover:underline cursor-pointer">
                        terms of service
                      </span>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 20px 25px -5px rgba(71, 168, 168, 0.3), 0 10px 10px -5px rgba(71, 168, 168, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#47a8a8] via-teal-500 to-[#47a8a8] hover:from-[#3c8d8d] hover:via-teal-600 hover:to-[#3c8d8d] text-white font-semibold py-4 px-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#47a8a8]/20 shadow-lg transition-all duration-300 text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Contact;
