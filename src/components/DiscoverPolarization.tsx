"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PolarizationModal from "./PolarizationModal";

const DiscoverPolarization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url('/images/discover-polarization/discover-polarization-new.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-purple-600/10 via-transparent to-black/20" />

            {/* Content Container */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Title with gradient underline */}
              <div className="mb-6">
                <motion.h2
                  className="text-5xl font-bold text-white mb-2"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  Discover Polarization
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "6rem", opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Subtitle */}
              <motion.h3
                className="text-3xl text-white mb-12 max-w-3xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                How Polarization Technology Delivers Unparalleled Benefits.
              </motion.h3>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Enhanced bioavailability and stability through molecular
                    alignment, leading to a more consistent and balanced effect
                    with up to 3-5x more absorption.
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Refined compound effects for a smoother and more controlled
                    experience, enabling precise dosing and reduced variability
                    in individual responses.
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE HOW IT WORKS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <PolarizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default DiscoverPolarization;
