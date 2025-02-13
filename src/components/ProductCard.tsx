import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  colorClass: string;
  imageSrc: string;
}

const ProductCard = ({
  title,
  category,
  description,
  colorClass,
  imageSrc,
}: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} to-gray-900 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm`}
      >
        {/* Header Section */}
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-xl font-bold text-white leading-tight">
            {title}
          </h3>
          <span className="text-gray-300 text-xs font-medium opacity-75">
            / {category}
          </span>
        </div>

        {/* Product Image Row */}
        <div className="relative w-full h-[200px] my-4">
          <Image src={imageSrc} alt={title} fill className="object-contain" />
        </div>

        {/* Description and Button Row */}
        <div className="flex items-center justify-between">
          <p className="text-gray-200 text-base leading-relaxed flex-1 mr-4">
            {description}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center transition-colors duration-300 hover:bg-purple-700 shadow-lg"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        category={category}
        description={description}
        colorClass={colorClass}
        imageSrc={imageSrc}
      />
    </>
  );
};

export default ProductCard;
