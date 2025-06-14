import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gradient-to-r from-[#47a8a8] to-[#5bb5b5] rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/30"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-white/20"></div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Begin Your Journey?
        </h3>

        <p className="text-sm md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards better mental health.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all cursor-pointer"
          >
            <FaCalendarAlt className="mr-2 text-sm sm:text-base" />
            <span className="font-medium text-sm sm:text-base">
              Appointments Available
            </span>
          </motion.a>

          <motion.a
            href="tel:+918800007740"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-white hover:bg-white/90 text-[#47a8a8] rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all cursor-pointer shadow-sm"
          >
            <FaPhoneAlt className="mr-2 text-sm sm:text-base" />
            <span className="font-semibold text-sm sm:text-base">
              Call +91 88000-07740
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
