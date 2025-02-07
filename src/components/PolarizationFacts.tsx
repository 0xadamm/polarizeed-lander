"use client";

import React from "react";
import { motion } from "framer-motion";

const PolarizationFacts = () => {
  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Card - Nano Tech Innovation */}
          <motion.div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url('/images/polorization-facts/polarization-facts-4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-black/40 backdrop-blur-sm" />
            <div className="relative z-10 p-6 md:p-12">
              <div className="mb-4">
                <motion.h2
                  className="text-4xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  Nano Tech Innovation
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "6rem", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />
              </div>
              <motion.h3
                className="text-2xl text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                Revolutionizing Drug Delivery
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 20, opacity: 0 }}
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
                    NanoTech is revolutionizing health and wellness with
                    cutting-edge, patent-protected nano delivery systems.
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
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
                    Advanced nano-encapsulation and buccal absorption ensure
                    rapid, precise dosing in under 60 seconds for superior
                    bioavailability.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Enhanced Delivery */}
          <motion.div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url('/images/polorization-facts/polarization-facts-5.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-black/40 backdrop-blur-sm" />
            <div className="relative z-10 p-6 md:p-12">
              <div className="mb-4">
                <motion.h2
                  className="text-4xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  Enhanced Delivery
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-400"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "6rem", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />
              </div>
              <motion.h3
                className="text-2xl text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                Fast, Convenient & Consistent
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 20, opacity: 0 }}
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
                    Experience breakthrough in drug delivery with Nano Tech
                    Strips bypassing first-pass metabolism and digestive
                    degradation.
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
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
                    Enjoy effortless administration, precise dosing, and optimal
                    health benefits—all without water.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PolarizationFacts;
