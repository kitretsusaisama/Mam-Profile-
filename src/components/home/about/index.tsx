import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#47a8a8] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-white/5 blur-xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-white/5 blur-xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-24 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 space-y-6 md:space-y-8 flex flex-col justify-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="uppercase text-sm tracking-[0.2em] text-white/90"
          >
            <span className="uppercase text-sm tracking-[0.2em] text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              Welcome to Ms. Upinder Kaur
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-white drop-shadow-lg"
          >
            <span className="block">Experienced Psychologist & Therapist</span>
            <span className="block">in Delhi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
          >
            With 21+ years of expertise in clinical and counselling psychology,
            Ms. Upinder Kaur offers compassionate care to help you navigate
            stress, anxiety, and emotional well-being.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-white/90 text-[#47a8a8] transition-all duration-300 font-medium py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2 shadow-lg"
            >
              <FaCalendarAlt />
              Book a Session
            </motion.button>
            <motion.a
              href="tel:+918800007740"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent hover:bg-white/10 border-2 border-white transition-all duration-300 font-medium py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center md:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-sm border-4 border-white/20">
            <Image
              src="https://res.cloudinary.com/dld93nt7d/image/upload/f_auto,q_auto/v1/MCT/assets/doctors/pxbizv1hklh0nampp8ux"
              alt="Upinder Kaur"
              width={500}
              height={600}
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#47a8a8]/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full border-4 border-white/20"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-28 w-44 h-44 rounded-full border-8 border-white/20"
      />
    </div>
  );
};

export default About;
