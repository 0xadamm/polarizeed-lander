"use client";

import React from "react";
import { motion } from "framer-motion";

const DiscoverVideo = () => {
  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Video Card (previously right card) */}
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
                backgroundImage: "url('/images/new-images/new-bgs2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 backdrop-blur-sm" />
            {/* Blue glow layer */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cyan-900/20 via-cyan-900/5 to-transparent mix-blend-soft-light" />
            <div className="relative z-10 h-full">
              <video
                src="/video/proton-short-square-no-cc.mov"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>

          {/* Text Card (previously left card) */}
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
                backgroundImage: "url('/images/new-images/new-bgs1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 backdrop-blur-sm" />
            {/* Blue glow layer */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cyan-900/20 via-cyan-900/5 to-transparent mix-blend-soft-light" />
            <div className="relative z-10 p-8 md:p-12">
              <div className="mb-4">
                <motion.h2
                  className="text-4xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  Patented Polarization Technology
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-200"
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
                21st Century Molecular Science
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
                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
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
                    Leveraging our patented monopole electromagnetic vibration
                    technology, our system generates a precise resonance effect
                    that excites molecular vibrations, boosting energy
                    absorption and ingredient potency.
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
                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
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
                    Innovative nano-encapsulation coupled with efficient buccal
                    delivery guarantees rapid and accurate dosing for superior
                    bioavailability.
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-black"
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
                    Cutting-edge formulations deliver unmatched performance and
                    reliability, setting new standards in molecular enhancement.
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

export default DiscoverVideo;
