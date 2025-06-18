'use client';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

const services = [
  {
    title: 'Adult Mental Health',
    desc: 'Support for anxiety, depression, and emotional challenges in adulthood.',
    image: '/images/Happy-couple.jpg',
  },
  {
    title: 'Relationship Counselling',
    desc: 'Guidance to help couples and individuals build healthier relationships.',
    image: '/images/happy-couples.jpg',
  },
  {
    title: 'Child Counselling',
    desc: 'Therapy focused on emotional, social, and behavioral support for children.',
    image: '/images/child.jpg',
  },
  {
    title: 'Psychological Assessment',
    desc: 'In-depth evaluations to better understand mental health and cognitive functioning.',
    image: '/images/PsychologicalAssessment.jpg',
  },
];


const Services = () => {
  return (
    <section className="bg-gradient-to-r from-[#fff7f0] via-[#fceee6] to-[#fde5d4] py-10 md:py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 underline">
          Start Exploring Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group overflow-hidden">
              <div className="relative w-full h-96 overflow-hidden border-4 border-transparent hover:border-[#47a8a8] transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105 p-1"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white rounded-full p-3 shadow-md hover:scale-110 transition-transform duration-300 text-[#47a8a8] hover:bg-[#47a8a8] hover:text-white">
                  <GoArrowUpRight size={24}/>
                  </button>
                </div>
              </div>
              <div className="p-2 text-left">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
