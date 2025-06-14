import React from "react";
interface ServicesCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  icon: Icon,
  title,
  desc,
}) => {
  return (
    <div className="group transition-transform hover:-translate-y-1 duration-300">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full group-hover:bg-[#47a8a8] group-hover:border-[#47a8a8] transition-colors duration-300">
        <div className="w-14 h-14 mb-5 rounded-xl bg-[#47a8a8] flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-[#47a8a8]">
          <Icon className="text-white w-6 h-6 group-hover:text-[#47a8a8] transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default ServicesCard;
