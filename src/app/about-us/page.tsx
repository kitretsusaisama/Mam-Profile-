'use client'

import ContactCTA from '@/components/common/ContactCTA';
import { useState, useEffect } from 'react';
import { FaBookOpen, FaBrain, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { FaAward, FaClock, FaStethoscope } from 'react-icons/fa6';


export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#47a8a8] via-[#5bb5b5] to-[#47a8a8] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <FaStethoscope className="w-5 h-5" />
                <span className="text-sm font-medium">Senior Psychologist & Counselling Expert</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                Dr. Upinder Kaur
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Transforming lives through compassionate mental health care with over 22 years of clinical excellence
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <FaClock className="w-4 h-4" />
                  <span>22+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <FaAward className="w-4 h-4" />
                  <span>Multiple Specializations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'approach', label: 'Approach' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#47a8a8] text-[#47a8a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    A Journey of <span className="text-[#47a8a8]">Healing & Hope</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Dr. Upinder Kaur stands as a beacon of compassionate mental health care, bringing over two decades of profound clinical experience to her practice. As the esteemed Director of WS Clinic and the visionary founder of My Child Therapy, she has dedicated her career to enhancing the physical and emotional well-being of individuals across all age groups.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#47a8a8]/10 to-[#47a8a8]/5 rounded-2xl">
                    <div className="text-3xl font-bold text-[#47a8a8] mb-2">22+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#47a8a8]/10 to-[#47a8a8]/5 rounded-2xl">
                    <div className="text-3xl font-bold text-[#47a8a8] mb-2">10</div>
                    <div className="text-sm text-gray-600">Years at SGRH</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#47a8a8] to-[#5bb5b5] rounded-3xl p-8 text-white">
                  <FaQuoteLeft className="w-12 h-12 mb-6 opacity-80" />
                  <blockquote className="text-lg italic leading-relaxed mb-6">
                    &quot;Her calm demeanor and empathetic approach have made her a trusted figure among patients and peers alike, always offering care with humility, grace, and profound respect for the human spirit.&quot;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Professional Recognition</div>
                      <div className="text-white/80 text-sm">Trusted by thousands of families</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-current text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Background */}
            <section className="bg-white rounded-3xl p-8 lg:p-12 border">
              <h3 className="text-3xl font-bold text-[#47a8a8] mb-8">Professional Background</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="leading-relaxed mb-6">
                  Dr. Upinder Kaur&apos;s distinguished career includes 10 years of dedicated service at Sir Ganga Ram Hospital, where she made significant contributions to the advancement of psychological care. Her deep-rooted passion for adult, child, and adolescent mental health has enabled her to cultivate vast expertise in both diagnostic assessment and therapeutic intervention.
                </p>
                <p className="leading-relaxed">
                  Currently offering her expert services across multiple prestigious locations in Kirti Nagar, New Delhi, Dr. Upinder Kaur continues to be at the forefront of mental health innovation, combining evidence-based practices with a deeply compassionate approach that honors each individual&apos;s unique journey toward healing and growth.
                </p>
              </div>
            </section>

            <ContactCTA/>
          </div>
        )}

        {/* Approach Tab */}
        {activeTab === 'approach' && (
          <div className="space-y-16">
            <section className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Therapeutic <span className="text-[#47a8a8]">Approach</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dr. Upinder Kaur employs a comprehensive, evidence-based approach that is always tailored, respectful, and deeply patient-centered, ensuring each individual receives the most appropriate care for their unique needs.
              </p>
            </section>

            {/* Assessment Tools */}
            <section className="bg-gradient-to-br from-[#47a8a8]/5 to-[#47a8a8]/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Assessment & Evaluation Tools</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <FaBookOpen className="w-6 h-6 text-[#47a8a8]" />
                    Psychological Assessments
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Intelligence Tests & Cognitive Assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Minnesota Multiphasic Personality Inventory (MMPI)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Rorschach Inkblot Test</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                    <FaBrain className="w-6 h-6 text-[#47a8a8]" />
                    Specialized Evaluations
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developmental & Behavioral Assessments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Neuropsychological Evaluations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#47a8a8] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Behavioral Observations & Parent-Teacher Feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}