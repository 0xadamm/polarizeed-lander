"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PolarizationServiceModal from "./PolarizationServiceModal";

const PolarizationService = () => {
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
                  "url('/images/polarization-service/bg-polarization-service.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Title with gradient underline */}
              <div className="mb-6">
                <motion.h2
                  className="text-5xl font-bold text-white mb-2"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  Polarization as a Service
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "6rem", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Subtitle */}
              <motion.h3
                className="text-2xl text-white mb-12 max-w-3xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Formulate superior products by enhancing molecular
                bioavailability.
              </motion.h3>

              {/* Content with checkmark */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Experience unmatched nutrient absorption with our advanced
                    polarization technology. Achieve over 90% absorption rates,
                    enhanced bioavailability, and superior efficacy for your
                    formulations, setting new standards in product
                    effectiveness.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    Our comprehensive service includes nano-encapsulation
                    technology and expert consultation throughout the process.
                    From initial testing to full-scale implementation, we ensure
                    optimal molecular enhancement for your specific needs.
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE ABOUT OUR SERVICES
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <PolarizationServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PolarizationService;
