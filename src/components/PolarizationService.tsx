"use client";

import React from "react";
import { motion } from "framer-motion";

const PolarizationService = () => {
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
                  Polarization: More Than a Product
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
                className="text-3xl text-white mb-12 max-w-3xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Providing Revolutionary Delivery Solutions for Your Needs.
              </motion.h3>

              {/* Content with checkmark */}
              <motion.div
                className="flex items-start space-x-4 mb-12 max-w-3xl"
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
                  We offer our advanced polarization technology as a service,
                  enabling businesses to enhance the bioavailability and
                  efficacy of their products. Partner with us to revolutionize
                  delivery mechanisms and create unparalleled user experiences.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
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
    </section>
  );
};

export default PolarizationService;
