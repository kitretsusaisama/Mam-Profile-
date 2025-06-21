

import BlogCard from "@/components/common/BlogCard";

const blogData = [
  {
    category: "Mental Health",
    image: "/images/Anxiety-in-Children.jpg",
    title: "Understanding Anxiety in Children: Symptoms, Causes & Support",
    description: "Learn to identify signs of anxiety in children, including physical symptoms and behavioral changes, and discover effective psychological support strategies used in therapy.",
    slug: "/blogs/understanding-anxiety-in-children",
  },
  {
    category: "Mental Health",
    image: "/images/Early-Childhood-Trauma.jpg",
    title: "How Early Childhood Trauma Affects Mental Health Long-Term",
    description: "Explore how early trauma influences brain development, emotional regulation, and social behavior — and how timely psychological intervention can foster healing.",
    slug: "/blogs/how-early-childhood-trauma-affects-mental-health-long-term",
  },
  {
    category: "Overall Wellness",
    image: "/images/Children-playing.jpg",
    title: "The Power of Play Therapy in Child Psychology",
    description: "Discover how play therapy enables children to express emotions, build coping skills, and process trauma in a safe, therapeutic environment with a trained psychologist.",
    slug: "/blogs/the-power-of-play-therapy-in-child-psychology",
  },
  {
    category: "Overall Wellness",
    image: "/images/Stress.jpg",
    title: "Helping Teens Cope with Academic Stress and Pressure",
    description: "Academic expectations can impact a teen’s emotional well-being. Understand how counseling and stress management techniques can help adolescents thrive mentally.",
    slug: "/blogs/helping-teens-cope-with-academic-stress-and-pressure",
  },
  {
    category: "Overall Wellness",
    image: "/images/Social-Media.jpg",
    title: "Social Media & Mental Health in Adolescents: What Parents Should Know",
    description: "Uncover the effects of excessive social media use on teenagers' mental health, including anxiety, sleep issues, and self-esteem challenges — and how to set healthy boundaries.",
    slug: "/blogs/social-media-and-mental-health-in-adolescents",
  },
  {
    category: "Overall Wellness",
    image: "/images/happy-couple.jpg",
    title: "Building Emotional Resilience in Couples Through Therapy",
    description: "Emotional resilience helps couples handle life's ups and downs. Learn how therapy equips them with self-awareness, confidence, and tools to manage emotions effectively.",
    slug: "/blogs/building-emotional-resilience-in-couples-through-therapy",
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
