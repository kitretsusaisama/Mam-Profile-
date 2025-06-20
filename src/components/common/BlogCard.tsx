import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, description, image }) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="w-full h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="py-4">
        <p className="text-sm text-[#f7c99b] mb-2">{category}</p>
        <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Read More CTA */}
        <div className="flex items-center justify-start gap-2 group cursor-pointer">
          <span className="text-sm font-semibold text-gray-800 group-hover:text-primary transition">
            Read More
          </span>
          <span className="text-[#f7c99b] w-6 h-6 rounded-sm border border-[#f7c99b] flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all duration-300">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
