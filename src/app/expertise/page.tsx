"use client";

import ContactCTA from "@/components/common/ContactCTA";
import ServicesCard from "@/components/common/ServicesCard";
import { FaBrain, FaHeart, FaUsers } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

const services = [
  {
    icon: FaBrain,
    title: "Adult Mental Health",
    desc: "OCD, PTSD, Bipolar Disorder, Anxiety, Stress Management",
  },
  {
    icon: FaHeart,
    title: "Child & Adolescent Care",
    desc: "Developmental assessments, ADHD, Autism, Learning disabilities",
  },
  {
    icon: FaUsers,
    title: "Couples Therapy",
    desc: "Relationship dynamics, Marital counseling, Family therapy",
  },
  {
    icon: FiShield,
    title: "Specialized Assessments",
    desc: "MMPI, Rorschach, Neuropsychological evaluations",
  },
];

const Expertise = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#47a8a8]/10 to-[#47a8a8]/5 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium text-[#47a8a8]">
              Comprehensive Care
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Areas of <span className="text-[#47a8a8]">Expertise</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 lg:p-14 mb-6 shadow-inner">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Adult */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Adult Mental Health
              </h3>
              <div className="space-y-4">
                {[
                  "Obsessive-Compulsive Disorder (OCD)",
                  "Post-Traumatic Stress Disorder (PTSD)",
                  "Bipolar Disorder",
                  "Psychotic Disorders",
                  "Anxiety Disorders",
                  "Stress Management",
                  "Depression & Mood Disorders",
                ].map((condition, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#47a8a8] w-2 h-2 flex-shrink-0 rotate-45" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Child */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Child & Adolescent Care
              </h3>
              <div className="space-y-4">
                {[
                  "Autism Spectrum Disorders",
                  "ADHD & Learning Disabilities",
                  "Intellectual Disabilities",
                  "Cerebral Palsy Support",
                  "Speech & Language Delays",
                  "Academic Anxiety & Exam Stress",
                  "Developmental Assessments",
                ].map((condition, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#47a8a8] w-2 h-2 flex-shrink-0 rotate-45" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </section>
  );
};

export default Expertise;
