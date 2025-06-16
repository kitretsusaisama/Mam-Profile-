"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const FAQs = () => {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [isHoveringCTA, setIsHoveringCTA] = useState(false);

    const router = useRouter();

    const toggleFAQ = (index: number) => {
        setActiveIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleCTAClick = () => {
        router.push("/contact-us");
    };

    const faqData = [
        {
            question: "Who is Dr. Upinder Kaur?",
            answer: "Dr. Upinder Kaur is a Senior Psychologist and Counselling Psychologist with over 22 years of clinical experience. She is the Director of WS Clinic and the founder of My Child Therapy in Kirti Nagar, New Delhi. She specializes in adult, adolescent, and child mental health."
        },
        {
            question: "What psychological conditions does Dr. Upinder Kaur treat?",
            answer: "She provides therapy for a wide range of conditions including anxiety, stress, OCD, PTSD, Bipolar Disorder, psychotic disorders, and emotional difficulties in both adults and adolescents."
        },
        {
            question: "What therapies does Dr. Upinder Kaur use?",
            answer: "Dr. Upinder Kaur uses evidence-based therapies such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Psychodynamic Therapy, Integrative Talk Therapy, Interpersonal Therapy (IPT), Exposure Therapy, and Acceptance and Commitment Therapy (ACT)."
        },
        {
            question: "Does Dr. Upinder Kaur offer therapy for children with special needs?",
            answer: "Yes, she provides comprehensive assessments and intervention for children with intellectual disabilities, autism spectrum disorder, ADHD, cerebral palsy, speech and language delays, and learning disabilities."
        },
        {
            question: "Does Dr. Upinder Kaur offer marital and couple therapy?",
            answer: "Yes, she offers personalized couple and marital therapy, helping individuals and partners navigate relationship challenges with empathy and understanding."
        },
        {
            question: "Can adolescents seek therapy for academic and emotional stress?",
            answer: "Absolutely. Dr. Upinder Kaur supports adolescents facing exam stress, academic anxiety, and developmental concerns through tailored, age-appropriate therapies."
        },
        {
            question: "What makes Dr. Upinder Kaur's approach unique?",
            answer: "Her approach is deeply patient-centered, empathetic, and rooted in over two decades of clinical expertise. She integrates therapeutic methods to suit each individual's needs and fosters a safe, respectful healing environment."
        },
        {
            question: "How can I book an appointment with Dr. Upinder Kaur?",
            answer: "You can book an appointment by contacting WS Clinic, My Child Therapy, or Kalra Hospital in Kirti Nagar, New Delhi. Alternatively, you can reach out via the contact form on her official website."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="faq-heading">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#47a8a8] to-[#2e7a7a]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 opacity-80 max-w-2xl mx-auto">
                        Find answers to common questions about our services
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group-hover:border-opacity-70 group-hover:border-[#47a8a8]">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#47a8a8]/20 transition-all duration-200 hover:bg-gray-50/50"
                                    aria-expanded={activeIndices.includes(index)}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="md:text-lg font-semibold text-gray-700 pr-4">
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: activeIndices.includes(index) ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${activeIndices.includes(index)
                                                ? `bg-gradient-to-r from-[#47a8a8] to-[#2e7a7a] text-white`
                                                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                                                } transition-all duration-300`}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {activeIndices.includes(index) && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                    opacity: { duration: 0.2, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`px-6 md:px-8 pb-6 border-t border-[#47a8a8] border-opacity-20`}>
                                                <div className="prose prose-gray max-w-none pt-4">
                                                    <p className="text-gray-700 opacity-90 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <motion.div
                        animate={isHoveringCTA ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                    >
                        <p className="text-gray-700 opacity-80 mb-6 text-lg">
                            Still have questions? I&apos;m here to help.
                        </p>
                        <motion.button
                            onMouseEnter={() => setIsHoveringCTA(true)}
                            onMouseLeave={() => setIsHoveringCTA(false)}
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleCTAClick}
                            className={`relative bg-[#47a8a8] text-white hover:bg-white hover:text-[#47a8a8] border border-[#47a8a8] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md focus:outline-none overflow-hidden`}
                        >
                            <span className="relative z-10">Contact Me</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={isHoveringCTA ? { opacity: 0.1 } : { opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-white/20"
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQs;