import React from "react";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  colorClass: string;
}

const ProductCard = ({
  title,
  category,
  description,
  colorClass,
}: ProductCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} to-white p-4 md:p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl max-w-[380px]`}
    >
      {/* Header Section */}
      <div className="mb-3 flex items-center gap-2">
        <h3 className="text-xl font-bold text-purple-700 leading-tight">
          {title}
        </h3>
        <span className="text-purple-600 text-sm font-medium opacity-80">
          / {category}
        </span>
      </div>

      {/* Product Image Row */}
      <div className="relative w-full h-[200px] my-3">
        <div className="w-full h-full bg-black/20 backdrop-blur rounded-2xl shadow-lg transform transition-transform hover:scale-105" />
      </div>

      {/* Description and Button Row */}
      <div className="flex items-center justify-between">
        <p className="text-gray-700 text-base leading-relaxed flex-1 mr-2">
          {description}
        </p>
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-purple-700">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
