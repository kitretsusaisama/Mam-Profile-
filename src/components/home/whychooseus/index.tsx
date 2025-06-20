"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    image: "/images/Certified-Psychologist.jpg",
    title: "Certified Psychologist",
    desc: "Trained in developmental & clinical psychology with over 22 years of experience across top institutions like Sir Ganga Ram Hospital.",
  },
  {
    image: "/images/doctor-with-patient.jpg",
    title: "Extensive Experience",
    desc: "Specializing in child, adolescent, and adult mental health with deep expertise in CBT, DBT, and diagnostic assessments.",
  },
  {
    image: "/images/Trusted-Compassionate.webp",
    title: "Trusted & Compassionate",
    desc: "Known for empathetic care, ethical practices, and holistic treatment plans customized for every individual.",
  },
  {
    image: "/images/Holistic-Healing-Approach.jpg",
    title: "Holistic Healing Approach",
    desc: "Combining evidence-based therapy with mindfulness, family involvement, and long-term mental wellness strategies.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group"
            >
              <h3 className="text-2xl font-serif font-medium text-white mb-4">{feature.title}</h3>
              <div className="rounded-xl bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-56 relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2 pb-4">
                  <p className="text-sm text-gray-600 tracking-widest">{feature.desc}</p>
                </div>
              </div>
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
