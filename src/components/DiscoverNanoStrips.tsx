"use client";

import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Better Days",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/BetterDays.png",
    colorClass: "from-purple-100",
  },
  {
    id: 2,
    title: "Boost",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/Boost.png",
    colorClass: "from-emerald-100",
  },
  {
    id: 3,
    title: "Nootropic",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/Nootropic.png",
    colorClass: "from-yellow-100",
  },
  {
    id: 4,
    title: "Hydration",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/Hydration.png",
    colorClass: "from-blue-100",
  },
  {
    id: 5,
    title: "Performance",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/Performance.png",
    colorClass: "from-orange-100",
  },
  {
    id: 6,
    title: "Primed",
    category: "brain power, anxiety & focus",
    description:
      "Rapid absorption. Boosts brain power, gives more focus & clarity, calms your body from anxiety.",
    imageSrc: "/images/ packaging/PrimedFemale.png",
    colorClass: "from-pink-100",
  },
];

const DiscoverNanoStrips = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-purple-800 mb-2">
            Discover NanoStrip Wellness in Every Strip
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              colorClass={product.colorClass}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 flex justify-center">
          <button className="w-12 h-12 rounded-full bg-white border border-gray-200 text-purple-800 hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm hover:shadow-md">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNanoStrips;
