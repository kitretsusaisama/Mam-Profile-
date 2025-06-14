"use client";

import { FaCertificate, FaHospitalAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: <FaCertificate className="text-white text-3xl" />,
    title: "Certified Psychologist",
    desc: "Trained in developmental & clinical psychology with over 22 years of experience across top institutions like Sir Ganga Ram Hospital.",
  },
  {
    icon: <FaHospitalAlt className="text-white text-3xl" />,
    title: "Extensive Experience",
    desc: "Specializing in child, adolescent, and adult mental health with deep expertise in CBT, DBT, and diagnostic assessments.",
  },
  {
    icon: <FaShieldAlt className="text-white text-3xl" />,
    title: "Trusted & Compassionate",
    desc: "Known for empathetic care, ethical practices, and holistic treatment plans customized for every individual.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-[#47a8a8] via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Mental Health Care
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Combining years of expertise with compassionate care to provide the
            best possible outcomes for patients
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="relative bg-white rounded-md p-4 border border-gray-50 overflow-hidden backdrop-blur-sm transition-all duration-300 rounded-tr-[40px]">
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-tr-4xl  mb-6 transition-transform duration-300 }`}
                style={{
                  background: "linear-gradient(145deg, #47a8a8, #3c9a9a)",
                  boxShadow:
                    "0 8px 20px rgba(71,168,168,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">22+ Years Experience</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              <span className="text-sm font-medium">
                Certified Professional
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
