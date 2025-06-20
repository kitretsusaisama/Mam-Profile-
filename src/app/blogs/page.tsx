import BlogCard from "@/components/common/BlogCard";

const blogs = [
  {
    category: "Mental Health",
    image: "/images/Anxiety-in-Children.jpg",
    title: "Understanding Anxiety in Children: Symptoms, Causes & Support",
    description: "Learn to identify signs of anxiety in children, including physical symptoms and behavioral changes, and discover effective psychological support strategies used in therapy.",
  },
  {
    category: "Mental Health",
    image: "/images/Early-Childhood-Trauma.jpg",
    title: "How Early Childhood Trauma Affects Mental Health Long-Term",
    description: "Explore how early trauma influences brain development, emotional regulation, and social behavior — and how timely psychological intervention can foster healing.",
  },
  {
    category: "Overall Wellness",
    image: "/images/Children-playing.jpg",
    title: "The Power of Play Therapy in Child Psychology",
    description: "Discover how play therapy enables children to express emotions, build coping skills, and process trauma in a safe, therapeutic environment with a trained psychologist.",
  },
  {
    category: "Overall Wellness",
    image: "/images/stress.jpg",
    title: "Helping Teens Cope with Academic Stress and Pressure",
    description: "Academic expectations can impact a teen’s emotional well-being. Understand how counseling and stress management techniques can help adolescents thrive mentally.",
  },
  {
    category: "Overall Wellness",
    image: "/images/Social-Media.jpg",
    title: "Social Media & Mental Health in Adolescents: What Parents Should Know",
    description: "Uncover the effects of excessive social media use on teenagers' mental health, including anxiety, sleep issues, and self-esteem challenges — and how to set healthy boundaries.",
  },
  {
    category: "Overall Wellness",
    image: "/images/happy-couple.jpg",
    title: "Building Emotional Resilience in Couples Through Therapy",
    description: "Emotional resilience helps couples handle life's ups and downs. Learn how therapy equips them with self-awareness, confidence, and tools to manage emotions effectively.",
  },
];

const Blogs = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-700">
            Insights & <span className="text-[#47a8a8]">Articles</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Blogs;
