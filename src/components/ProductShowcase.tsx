"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDisplay() {
  return (
    <section className="py-2 md:py-3 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-purple-800 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Explore the Benefits of Calm
            <br className="hidden md:block" />
            and Energy
          </motion.h2>
          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-600 to-yellow-400 mb-8 md:mb-12"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8rem", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Left Column - 60% */}
            <motion.div
              className="col-span-1 lg:col-span-7 space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Fuel Your Day - Large Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl"
                style={{ height: "400px", minHeight: "400px" }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="/images/bento-section/bg-bento-01.png"
                  alt="Energy background"
                  fill
                  className="object-cover"
                />
                <div className="relative h-full p-6 md:p-12 flex items-center">
                  <div className="grid grid-cols-[1fr,120px] md:grid-cols-[1fr,200px] gap-4 md:gap-8 items-center">
                    <div className="space-y-8 md:space-y-16">
                      <h3 className="text-3xl md:text-5xl text-white font-bold tracking-tight">
                        Fuel Your Day
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <Star className="text-white w-6 h-6 md:w-8 md:h-8" />
                        <p className="text-white text-base md:text-lg leading-relaxed">
                          Power through your day with fast-acting energy,
                          enhanced focus, and a smooth, uplifting boost to keep
                          you motivated and refreshed.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/bento-section/energy-strip.png"
                      alt="Energy Strip"
                      width={200}
                      height={300}
                      className="w-[120px] h-[200px] md:w-[200px] md:h-[300px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Elevate Your Energy - Small Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-xl"
                style={{ height: "280px", minHeight: "280px" }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="/images/bento-section/bg-bento-03.png"
                  alt="Elevate background"
                  fill
                  className="object-cover"
                />
                <div className="relative h-full p-6 md:p-12 flex items-center">
                  <div className="grid grid-cols-[1fr,100px] md:grid-cols-[1fr,160px] gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-4xl text-white font-bold tracking-tight">
                        Elevate Your Energy
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <Star className="text-white w-6 h-6 md:w-8 md:h-8" />
                        <p className="text-white text-sm md:text-base leading-relaxed">
                          Experience fast-acting energy and mental clarity for
                          enhanced productivity and focus.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/bento-section/energy-vape.png"
                      alt="Energy Vape"
                      width={160}
                      height={240}
                      className="w-[100px] h-[160px] md:w-[160px] md:h-[240px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - 40% */}
            <motion.div
              className="col-span-1 lg:col-span-5 space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Instant Relaxation - Small Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl"
                style={{ height: "280px", minHeight: "280px" }}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="/images/bento-section/bg-bento-02.png"
                  alt="Relaxation background"
                  fill
                  className="object-cover"
                />
                {/* Mobile Layout */}
                <div className="relative h-full p-6 flex items-center md:hidden">
                  <div className="grid grid-cols-[1fr,100px] gap-4 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white font-bold tracking-tight">
                        Instant Relaxation
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3">
                        <Star className="text-white w-6 h-6" />
                        <p className="text-white text-sm leading-relaxed">
                          Provides a quick, smooth, and effective way to
                          experience Delta 8 relaxation.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/bento-section/calm-vape.png"
                      alt="Calm Vape"
                      width={100}
                      height={140}
                      className="w-[100px] h-[140px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative h-full p-10 flex-col justify-between hidden md:flex">
                  <h3 className="text-4xl text-white font-bold tracking-tight">
                    Instant Relaxation
                    <div className="h-0.5 w-12 bg-white mt-3" />
                  </h3>
                  <div className="grid grid-cols-[1fr,120px] gap-8 items-center">
                    <div className="space-y-4">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white text-base leading-relaxed">
                        Provides a quick, smooth, and effective way to
                        experience Delta 8 relaxation.
                      </p>
                    </div>
                    <Image
                      src="/images/bento-section/calm-vape.png"
                      alt="Calm Vape"
                      width={120}
                      height={160}
                      className="w-[120px] h-[160px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Unwind and Relax - Large Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl h-[280px] md:h-[400px]"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src="/images/bento-section/bg-bento-04.png"
                  alt="Unwind background"
                  fill
                  className="object-cover"
                />
                {/* Mobile Layout */}
                <div className="relative h-full p-6 flex items-center md:hidden">
                  <div className="grid grid-cols-[1fr,100px] gap-4 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white font-bold tracking-tight">
                        Unwind and Relax
                        <div className="h-0.5 w-12 bg-white mt-3" />
                      </h3>
                      <div className="space-y-3">
                        <Star className="text-white w-6 h-6" />
                        <p className="text-white text-sm leading-relaxed">
                          Unwind and relax with fast-acting calm, stress relief,
                          and a gentle sense of tranquility.
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/bento-section/calm-strip.png"
                      alt="Calm Strip"
                      width={100}
                      height={140}
                      className="w-[100px] h-[140px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative h-full p-10 flex-col justify-between hidden md:flex">
                  <div className="mb-8">
                    <h3 className="text-4xl text-white font-bold tracking-tight">
                      Unwind and Relax
                      <div className="h-0.5 w-12 bg-white mt-3" />
                    </h3>
                  </div>

                  <div className="grid grid-cols-[1fr,140px] gap-8">
                    <div className="space-y-6">
                      <Star className="text-white w-8 h-8" />
                      <p className="text-white text-base leading-relaxed">
                        Unwind and relax with fast-acting calm, stress relief,
                        and a gentle sense of tranquility.
                      </p>
                    </div>
                    <Image
                      src="/images/bento-section/calm-strip.png"
                      alt="Calm Strip"
                      width={140}
                      height={200}
                      className="w-[140px] h-[200px] object-contain rounded-2xl transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
