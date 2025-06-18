import Image from "next/image";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#fceee6] to-[#fde5d4] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl max-w-md lg:max-w-lg">
            <Image
              src="https://res.cloudinary.com/dld93nt7d/image/upload/f_auto,q_auto/v1/MCT/assets/doctors/pxbizv1hklh0nampp8ux" // Replace with your image
              alt="Upinder Kaur"
              width={600}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-sm uppercase tracking-wide text-[#9f8669] mb-4 font-medium">About Dr. Upinder Kaur</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2c2c2c] mb-6 leading-tight">
            Meet Your Mental Wellness Specialist
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I’m a senior psychologist with over 22 years of experience helping individuals and families navigate challenges
            related to stress, anxiety, child behavior, and emotional well-being. I offer therapy across leading institutions in
            New Delhi and am known for a compassionate, evidence-based approach.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I’m passionate about early intervention, holistic mental health, and guiding individuals toward meaningful, healthy
            lives using child-focused and adult cognitive therapies.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className="bg-white hover:bg-white/90 text-[#47a8a8] transition-all duration-300 font-medium py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2"
            >
              <FaCalendarAlt />
              Book a Session
            </button>
            <a
              href="tel:+918800007740"
              className="bg-transparent text-[#47a8a8] hover:bg-white/10 border-2 border-white transition-all duration-300 font-medium py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
