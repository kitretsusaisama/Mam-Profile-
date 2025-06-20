

import BlogCard from "@/components/common/BlogCard";

const blogData = [
  {
    category: "Mental Health",
    title: "Understanding Anxiety in Children: Symptoms, Causes & Support",
    description: "Learn to identify signs of anxiety in children, including physical symptoms and behavioral changes, and discover effective psychological support strategies used in therapy.",
    image: "/images/Anxiety-in-Children.jpg",
  },
  {
    category: "Mental Health",
    title: "How Early Childhood Trauma Affects Mental Health Long-Term",
    description: "Explore how early trauma influences brain development, emotional regulation, and social behavior — and how timely psychological intervention can foster healing.",
    image: "/images/Early-Childhood-Trauma.jpg",
  },
  {
    category: "Overall Wellness",
    title: "The Power of Play Therapy in Child Psychology",
    description: "Discover how play therapy enables children to express emotions, build coping skills, and process trauma in a safe, therapeutic environment with a trained psychologist.",
    image: "/images/Children-playing.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-gray-800 text-4xl font-medium text-center mb-12">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
      </div>
    </section>
  );
}
