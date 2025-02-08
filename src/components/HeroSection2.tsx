"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScrollLock } from "@/context/ScrollLockContext";

export default function HeroSection2() {
  const { setIsLocked } = useScrollLock();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) {
      setIsLocked(false);
    }
  }, [hasAnimated, setIsLocked]);

  const onAnimationComplete = () => {
    setHasAnimated(true);
  };

  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-qbrB0BnpvwciHDPs6j1ApBZx8k6aEX.png")`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto max-w-6xl px-4 h-full flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-AnxWribVe2cyTC9knLPcAhh8MB2CDv.png"
                alt="Polarizeed Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <Link
              href="tel:18005674569"
              className="text-white text-lg hover:opacity-90 transition-opacity"
            >
              1 (800) 567 4569
            </Link>
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex items-center">
            <div className="max-w-3xl mx-auto w-full">
              {/* Text Content */}
              <div className="space-y-6 text-center">
                <motion.h1
                  className="text-white text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  Experience
                  <br />
                  Perfect Balance
                </motion.h1>
                <motion.p
                  className="text-white text-xl md:text-2xl leading-relaxed"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  Discover our revolutionary Delta-8 oral strips—designed for
                  fast-acting relief, mental clarity, and a smooth, uplifting
                  experience to keep you focused and stress-free throughout your
                  day.
                </motion.p>
                <motion.button
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onAnimationComplete={onAnimationComplete}
                >
                  LEARN MORE
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
