'use client';

import { motion } from 'framer-motion';
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate your backend here
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f0f9f9] py-14 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#47a8a8]">Get In Touch</h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Feel free to reach out with any questions. We&apos;re here to help and will respond promptly.
          Please provide as much information as possible.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-b from-sky-50 to-white rounded-3xl px-4 py-8 md:px-10 md:py-10 border border-white/20"
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
        >
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91..."
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Query
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#47a8a8] focus:border-transparent transition-all text-sm sm:text-base resize-none"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#47a8a8] text-white hover:bg-white hover:text-[#47a8a8] border border-[#47a8a8] font-medium py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
              Submit Request
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
