import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/Anxiety-in-Children.jpg",
    title: "Understanding Anxiety in Children: Symptoms, Causes & Support",
    date: "June 12, 2025",
    desc: "Learn to identify signs of anxiety in children, including physical symptoms and behavioral changes, and discover effective psychological support strategies used in therapy.",
  },
  {
    id: 2,
    image: "/images/Early-Childhood-Trauma.jpg",
    title: "How Early Childhood Trauma Affects Mental Health Long-Term",
    date: "June 5, 2025",
    desc: "Explore how early trauma influences brain development, emotional regulation, and social behavior — and how timely psychological intervention can foster healing.",
  },
  {
    id: 3,
    image: "/images/Children-playing.jpg",
    title: "The Power of Play Therapy in Child Psychology",
    date: "May 29, 2025",
    desc: "Discover how play therapy enables children to express emotions, build coping skills, and process trauma in a safe, therapeutic environment with a trained psychologist.",
  },
  {
    id: 4,
    image: "/images/stress.jpg",
    title: "Helping Teens Cope with Academic Stress and Pressure",
    date: "May 22, 2025",
    desc: "Academic expectations can impact a teen’s emotional well-being. Understand how counseling and stress management techniques can help adolescents thrive mentally.",
  },
  {
    id: 5,
    image: "/images/Social-Media.jpg",
    title: "Social Media & Mental Health in Adolescents: What Parents Should Know",
    date: "May 15, 2025",
    desc: "Uncover the effects of excessive social media use on teenagers' mental health, including anxiety, sleep issues, and self-esteem challenges — and how to set healthy boundaries.",
  },
  {
    id: 6,
    image: "/images/happy-couple.jpg",
    title: "Building Emotional Resilience in Couples Through Therapy",
    date: "May 8, 2025",
    desc: "Emotional resilience helps couples handle life's ups and downs. Learn how therapy equips them with self-awareness, confidence, and tools to manage emotions effectively.",
  },
];

const MediaBlogs = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-700">
            Insights & <span className="text-[#47a8a8]">Articles</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border overflow-hidden transition group"
            >
              <div className="relative overflow-hidden h-56 max-w-md">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                />
                {/* Hover Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 rounded-full p-2 shadow-md">
                    <FaLink className="text-gray-700 hover:text-[#47a8a8]" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 rounded-full px-2 py-1.5 shadow-md">
                    <p className="text-sm text-red-700 hover:text-[#47a8a8] transition duration-300">
                      {" "}
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-700 hover:text-[#47a8a8]">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.desc}</p>

                <a
                  href="#"
                  className="text-sm text-[#47a8a8] font-medium hover:underline inline-block pt-2"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaBlogs;
